const translations = {
    ru: {
        "help-title": "Частые проблемы",
        "header1": "Плата не появляется в списке подключений",
        "text1": "Если ваша плата не появляется в списке портов, убедитесь, что установлены драйверы Arduino.",
        "text2": "Вы можете скачать драйвер по кнопке ниже.",
        "download-btn": "Скачать драйвер",
        "install-title": "Инструкция по установке:",
        "step1": "1. Скачайте файл драйвера.",
        "step2": "2. Запустите файл.",
        "step3": "3. Нажмите кнопку INSTALL.",
        "header2": "Загрузка не происходит",
        "text3": "Если плата отображается в списке, но загрузка не выполняется, проверьте работоспособность платы и кабеля OTG."
    },
    kk: {
        "help-title": "Жиі кездесетін мәселелер",
        "header1": "Тақта қосылымдар тізімінде көрінбейді",
        "text1": "Егер сіздің тақтаңыз порттар тізімінде көрінбесе, Arduino драйверлерінің орнатылғанын тексеріңіз.",
        "text2": "Төмендегі батырма арқылы драйвер файлын жүктеуге болады.",
        "download-btn": "Драйверді жүктеу",
        "install-title": "Орнату нұсқаулығы:",
        "step1": "1. Драйвер файлын жүктеңіз.",
        "step2": "2. Файлды іске қосыңыз.",
        "step3": "3. INSTALL түймесін басыңыз.",
        "header2": "Жүктеу орындалмайды",
        "text3": "Егер тақта тізімде көрінсе, бірақ жүктеу орындалмаса, тақтаның және OTG кабелінің жұмыс істеуін тексеріңіз."
    },
    en: {
        "help-title": "Frequent problems",
        "header1": "Board does not appear in the list of connections",
        "text1": "If your board does not appear in the list of serial ports, please ensure that you have Arduino drivers installed.",
        "text2": "You can download the driver file from the button below.",
        "download-btn": "Download Driver",
        "install-title": "Installation instructions:",
        "step1": "1. Download the driver file.",
        "step2": "2. Launch the file.",
        "step3": "3. Press INSTALL button.",
        "header2": "Upload is not happening",
        "text3": "If you can successfully see the board in the list but upload does not happen, please check your board and OTG cable workability."
    },
    az: {
        "help-title": "Tez-tez rast gəlinən problemlər",
        "header1": "Plata bağlantılar siyahısında görünmür",
        "text1": "Əgər sizin platanız portlar siyahısında görünmürsə, Arduino sürücülərinin quraşdırıldığını yoxlayın.",
        "text2": "Sürücü faylını aşağıdakı düymədən yükləyə bilərsiniz.",
        "download-btn": "Sürücünü yükləyin",
        "install-title": "Quraşdırma təlimatı:",
        "step1": "1. Sürücü faylını yükləyin.",
        "step2": "2. Faylı başladın.",
        "step3": "3. INSTALL düyməsini basın.",
        "header2": "Yükləmə baş vermir",
        "text3": "Əgər plata siyahıda görünürsə, lakin yükləmə baş vermirsə, platanın və OTG kabelinin işləkliyini yoxlayın."
    },
    tr: {
        "help-title": "Sık karşılaşılan sorunlar",
        "header1": "Kart bağlantılar listesinde görünmüyor",
        "text1": "Kartınız bağlantı noktaları listesinde görünmüyorsa, Arduino sürücülerinin yüklü olduğundan emin olun.",
        "text2": "Sürücü dosyasını aşağıdaki düğmeden indirebilirsiniz.",
        "download-btn": "Sürücüyü indir",
        "install-title": "Kurulum talimatları:",
        "step1": "1. Sürücü dosyasını indirin.",
        "step2": "2. Dosyayı çalıştırın.",
        "step3": "3. INSTALL düğmesine basın.",
        "header2": "Yükleme gerçekleşmiyor",
        "text3": "Kartı listede görebiliyorsanız ancak yükleme gerçekleşmiyorsa, kartın ve OTG kablosunun çalıştığını kontrol edin."
    },
    uz: {
        "help-title": "Ko‘p uchraydigan muammolar",
        "header1": "Plata ulanishlar ro‘yxatida ko‘rinmayapti",
        "text1": "Agar sizning platangiz portlar ro‘yxatida ko‘rinmasa, Arduino drayverlari o‘rnatilganligini tekshiring.",
        "text2": "Drayver faylini quyidagi tugmadan yuklab olishingiz mumkin.",
        "download-btn": "Drayverni yuklab olish",
        "install-title": "O‘rnatish bo‘yicha yo‘riqnoma:",
        "step1": "1. Drayver faylini yuklab oling.",
        "step2": "2. Faylni ishga tushiring.",
        "step3": "3. INSTALL tugmasini bosing.",
        "header2": "Yuklash amalga oshmayapti",
        "text3": "Agar plata ro‘yxatda ko‘rinsa, lekin yuklash amalga oshmasa, plataning va OTG kabelining ishlashini tekshiring."
    }
};

window.SetLanguage = function (lang) {
    const dict = translations[lang] || translations["en"];
    document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = dict[el.getAttribute("data-key")];
    });
}

