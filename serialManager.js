import avrbro from './avrbro.m.js';

let serial = null;
let baudRate = 9600;
let isReading = false;

window.UploadHexToArduino = async function (hexContent) {
    try {
        serial = await avrbro.openSerial({ baudRate: 115200 });
        if (!serial) {
            console.log("❌ codiavr: operation stopped.");
            return;
        }

        const hexBuffer = avrbro.parseHex(hexContent);

        await avrbro.reset(serial);
        const success = await avrbro.flash(serial, hexBuffer, { boardName: 'uno' });

        if (success) {
            alert("✅ Upload success!");
            SendGameEvent("upload_success");
        } else {
            alert("❌ Upload error!");
            SendGameEventWithParams("upload_failed", { reason: "flash_failed" });
        }

        await avrbro.closeSerial(serial);
    } catch (error) {
        console.error("⛔ codiavr: avr error:", error);
        SendGameEventWithParams("upload_failed", { reason: error.message });
        alert("⛔ Error: " + error.message);
    }
};

window.ConnectSerial = async function () {
    try {
        serial = await avrbro.openSerial({ baudRate });

        if (!serial) return;

        unityInstance.SendMessage("Page_SerialMonitor", "OnSerialPortOpen");

        const reader = serial.reader;
        const decoder = new TextDecoder();
        let buffer = "";

        isReading = true;

        while (isReading) {
            try {
                const { value, done } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value);
                let lines = buffer.split("\n");
                buffer = lines.pop();

                for (const line of lines) {
                    unityInstance.SendMessage("Page_SerialMonitor", "OnPrintSerial", line.trim());
                }
            } catch (readError) {
                console.warn("⚠ Port read error:", readError);
                break;
            }
        }
    } catch (error) {
        console.error("error connecting to Serial:", error);
    }
};

window.SetBaudRate = async function (newBaudRate) {
    if (baudRate === newBaudRate) {
        console.log(`⚡ Baud rate already set to ${baudRate}`);
        return;
    }

    baudRate = newBaudRate;
    console.log(`🔄 Changing baud rate to ${baudRate}...`);

    if (serial) {
        console.log("⚠️ Stopping serial reading...");
        isReading = false;

        console.log("⚠️ Closing connection...");
        await avrbro.closeSerial(serial);
        serial = null;
    }

    console.log("🔌 Reconnecting with new baud rate...");
    await ConnectSerial();
};

window.SendToSerial = async function (message) {
    if (!serial) {
        alert("First connect to Serial!");
        return;
    }

    if (!message) {
        console.warn("⚠ No message provided!");
        return;
    }

    const writer = serial.writer;
    const encoder = new TextEncoder();

    try {
        await writer.write(encoder.encode(message + "\n"));
        console.log("📤 Sent:", message);
    } catch (error) {
        console.error("Data sending error:", error);
    }
};

window.CloseSerial = async function () {
    if (serial) {
        try {
            console.log("⏳ Closing connection");

            isReading = false;
            await avrbro.closeSerial(serial);
            serial = null;

            console.log("❌ Connection closed.");
            unityInstance.SendMessage("Page_SerialMonitor", "OnSerialPortClose");
        } catch (closeError) {
            console.error("⛔ Error while closing Serial:", closeError);
        }
    }
};
