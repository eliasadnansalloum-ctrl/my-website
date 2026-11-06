document.addEventListener('DOMContentLoaded', function() {
    // تحديد العناصر
    var searchInput = document.getElementById('searchInput');
    var categoryFilter = document.getElementById('categoryFilter');
    var locationFilter = document.getElementById('locationFilter');
    var resetBtn = document.getElementById('resetFilters');
    var eventCards = document.querySelectorAll('.event-card');
    var noResults = document.getElementById('noResults');
    // Stop filtering when the required elements are not available
        // Run event filtering only when its elements are available
    if (searchInput && categoryFilter && locationFilter && resetBtn && noResults) {

    // دالة الفلترة
    function filterEvents() {
        // Read the selected category from the URL
var urlParams = new URLSearchParams(window.location.search);
var selectedCategoryFromURL = urlParams.get('category');

if (selectedCategoryFromURL) {
    categoryFilter.value = selectedCategoryFromURL;
}
        var searchText = searchInput.value.toLowerCase().trim();
        var selectedCategory = categoryFilter.value;
        var selectedLocation = locationFilter.value;
        let visibleCount = 0;

        eventCards.forEach(card => {
            var title = card.getAttribute('data-title').toLowerCase();
            var category = card.getAttribute('data-category');
            var location = card.getAttribute('data-location');

            // شروط المطابقة
            var matchesSearch = title.includes(searchText);
            var matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            var matchesLocation = selectedLocation === 'all' || location === selectedLocation;

            if (matchesSearch && matchesCategory && matchesLocation) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // إظهار أو إخفاء رسالة "لا توجد نتائج"
        if (visibleCount === 0) {
            noResults.classList.remove('d-none');
        } else {
            noResults.classList.add('d-none');
        }
    }

    // ربط الأحداث (Events)
    searchInput.addEventListener('input', filterEvents);
    categoryFilter.addEventListener('change', filterEvents);
    locationFilter.addEventListener('change', filterEvents);
        // Apply filters when the page loads
    filterEvents();

    // زر إعادة التعيين
            resetBtn.addEventListener('click', function() {
        searchInput.value = '';
        categoryFilter.value = 'all';
        locationFilter.value = 'all';
        filterEvents();
    });

}
});

// Get the selected event ID from the URL
var urlParams = new URLSearchParams(window.location.search);
var eventId = urlParams.get('id');

console.log(eventId);
// Store event information
var eventsData = {
    "web-workshop": {
        title: "ورشة تطوير مواقع الويب",
        shortDescription: "ورشة تقنية تساعد الطلاب على تعلّم أساسيات تصميم وتطوير مواقع الويب.",
        date: "15/11/2026",
        location: "افتراضي (عبر الإنترنت)",
        category: "تقنية",
        description: "تهدف ورشة تطوير مواقع الويب إلى تعريف الطلاب بأساسيات تصميم وبرمجة صفحات الويب باستخدام HTML وCSS. يتعرف المشاركون على كيفية بناء صفحات إلكترونية منظمة، وتنسيق النصوص والصور والألوان، وإنشاء واجهات سهلة الاستخدام. كما تتيح الورشة فرصة للتطبيق العملي واكتساب مهارات تقنية تساعد الطلاب على تنفيذ مشاريعهم الإلكترونية وتطوير قدراتهم في مجال تصميم المواقع.",
       audience: "طلاب الجامعة الافتراضية السورية، والمبتدئون في مجال تصميم وتطوير مواقع الويب، والمهتمون بتعلم HTML وCSS.",
        objectives: [
    "التعرف على أساسيات HTML وCSS.",
    "تعلم تصميم صفحات ويب منظمة وجذابة.",
    "اكتساب مهارات تنسيق النصوص والصور.",
    "تنفيذ صفحة ويب بسيطة بشكل عملي.",
    "التعرف على مبادئ تصميم المواقع المتجاوبة."
],

        image: "assets/images/photo_2026-10-24_15-28-26.jpg",
        mapImage: "assets/images/virtual_event_map.png" ,
         galleryImages: [
        "assets/images/web-workshop-1.jpg",
        "assets/images/web-workshop-2.jpg",
        "assets/images/web-workshop-3.jpg"
    ]
        
    },

    "website-development": {
        title: "تطوير المواقع الإلكترونية",
        shortDescription: "تعرّف على أساسيات تصميم صفحات الويب وتطويرها باستخدام تقنيات الويب.",
        date: "20/11/2026",
        location: "افتراضي (عبر الإنترنت)",
        category: "تقنية",
        description: "تتناول هذه الفعالية المراحل الأساسية لتطوير المواقع الإلكترونية، بدءاً من التخطيط وتنظيم المحتوى، وصولاً إلى تصميم الصفحات وربط عناصرها بطريقة متناسقة. يتعرف المشاركون على أهمية HTML في بناء هيكل الموقع، وCSS في تحسين مظهره وتنسيقه، بالإضافة إلى مبادئ تصميم واجهات المستخدم وتجربة التصفح. وتهدف الفعالية إلى مساعدة الطلاب على اكتساب مهارات عملية تمكنهم من إنشاء مواقع إلكترونية بسيطة وتطويرها مستقبلاً.",
        audience: "طلاب الجامعة والمهتمون بتعلم تصميم وتطوير المواقع الإلكترونية، والمبتدئون في مجال تطوير الويب.",
        objectives: [
    "التعرف على مراحل تطوير المواقع الإلكترونية.",
    "فهم دور HTML في بناء صفحات الويب.",
    "استخدام CSS لتنسيق وتصميم الصفحات.",
    "التعرف على مبادئ تجربة المستخدم.",
    "اكتساب مهارات إنشاء موقع إلكتروني متكامل."
],
        image: "assets/images/photo_2026-10-24_15-31-23.jpg",
        mapImage: "assets/images/virtual_event_map.png",
        galleryImages: [
        "assets/images/website-development-1.jpg",
        "assets/images/website-development-2.jpg",
        "assets/images/website-development-3.jpg"
    ]
    },

    "academic-seminar": {
        title: "ندوة علمية وأكاديمية",
        shortDescription: "لقاء تعليمي لتبادل المعرفة ومناقشة موضوعات علمية وأكاديمية.",
        date: "25/11/2026",
        location: "حرم الجامعة",
        category: "أكاديمية",
        description: "تهدف الندوة العلمية والأكاديمية إلى توفير مساحة للحوار وتبادل المعرفة بين الطلاب والمهتمين بالمجالات العلمية المختلفة. تتناول الندوة مجموعة من الموضوعات الأكاديمية الحديثة، وتتيح للمشاركين فرصة طرح الأسئلة ومناقشة الأفكار والاستفادة من الخبرات والتجارب العلمية. كما تسهم في تعزيز التفكير النقدي والبحث العلمي، وتشجيع الطلاب على متابعة المستجدات العلمية وتوسيع معارفهم في تخصصاتهم الجامعية.",
        audience: "طلاب الجامعة وأعضاء الهيئة التعليمية والمهتمون بالبحث العلمي والموضوعات الأكاديمية.",
        objectives: [
    "تعزيز المعرفة العلمية والأكاديمية لدى الطلاب.",
    "تشجيع الحوار وتبادل الأفكار والخبرات.",
    "تنمية مهارات البحث والتفكير النقدي.",
    "التعرف على المستجدات في المجالات العلمية.",
    "تشجيع المشاركة في الأنشطة الأكاديمية."
],
        image: "assets/images/photo_2026-10-24_15-48-17.jpg",
        mapImage: "assets/images/real_event_map.jpg",
    galleryImages: [
        "assets/images/academic-seminar-1.jpg",
        "assets/images/academic-seminar-2.jpg",
        "assets/images/academic-seminar-3.jpg"
    ]
    },

    "skills-workshop": {
        title: "ورشة تطوير المهارات",
        shortDescription: "اكتشف طرقاً جديدة لتطوير مهاراتك وتنظيم وقتك الدراسي.",
        date: "30/11/2026",
        location: "افتراضي (عبر الإنترنت)",
        category: "مهارات",
        description: "تهدف ورشة تطوير المهارات إلى مساعدة الطلاب على تنمية قدراتهم الشخصية والدراسية واكتساب مهارات تساعدهم في حياتهم الجامعية والمهنية. تتناول الورشة أساليب تنظيم الوقت، والتخطيط للمهام، وإدارة الأولويات، ومهارات التواصل والعمل الجماعي وحل المشكلات. كما تقدم مجموعة من الإرشادات والتطبيقات العملية التي تساعد المشاركين على زيادة إنتاجيتهم وتحسين أدائهم الدراسي وتعزيز ثقتهم بأنفسهم.",
       audience: "طلاب الجامعة الراغبون في تطوير مهاراتهم الشخصية والدراسية وتحسين تنظيم وقتهم وأدائهم الجامعي.",
        objectives: [
    "تعلم أساليب تنظيم الوقت وإدارة الأولويات.",
    "تنمية مهارات التواصل والعمل الجماعي.",
    "تعزيز القدرة على حل المشكلات.",
    "تطوير مهارات التخطيط وتنظيم المهام.",
    "زيادة الثقة بالنفس وتحسين الأداء الدراسي."
],
        image: "assets/images/photo_2026-10-24_15-48-10.jpg",
        mapImage: "assets/images/virtual_event_map.png",
    galleryImages: [
        "assets/images/skills-workshop-1.jpg",
        "assets/images/skills-workshop-2.jpg",
        "assets/images/skills-workshop-3.jpg"
    ]
    },

    "student-innovation": {
        title: "معرض الابتكار الطلابي",
        shortDescription: "معرض لعرض مشاريع الطلاب المتميزة في مجالات البرمجة والتصميم.",
        date: "05/12/2026",
        location: "حرم الجامعة",
        category: "تقنية",
        description: "يهدف معرض الابتكار الطلابي إلى تسليط الضوء على إبداعات الطلاب ومشاريعهم المتميزة في مجالات التكنولوجيا والبرمجة والتصميم. يوفر المعرض مساحة لعرض الأفكار والمشاريع الجديدة، وتبادل الخبرات بين المشاركين، والتعرف على الحلول الإبداعية للمشكلات المختلفة. كما يشجع الطلاب على التفكير الابتكاري والعمل الجماعي وتحويل أفكارهم إلى مشاريع عملية قابلة للتطوير، ويسهم في اكتشاف المواهب الطلابية ودعم المبادرات الإبداعية داخل المجتمع الجامعي.",
       audience: "طلاب الجامعة أصحاب المشاريع والأفكار الإبداعية، والمهتمون بالبرمجة والتكنولوجيا والتصميم والابتكار.",
        objectives: [
    "تشجيع الطلاب على الابتكار والإبداع.",
    "عرض المشاريع والأفكار الطلابية المتميزة.",
    "تنمية مهارات التفكير الإبداعي وحل المشكلات.",
    "تعزيز التعاون وتبادل الخبرات بين الطلاب.",
    "دعم المواهب الطلابية وتحويل الأفكار إلى مشاريع عملية."
], 
        image: "assets/images/photo_2026-10-24_15-48-18.webp",
        mapImage: "assets/images/real_event_map.jpg",
    galleryImages: [
        "assets/images/student-innovation-1.jpg",
        "assets/images/student-innovation-2.jpg",
        "assets/images/student-innovation-3.jpg"
    ]
    }
};
// Display the selected event information
var selectedEvent = eventsData[eventId];

if (selectedEvent) {
    document.getElementById('event-title').textContent = selectedEvent.title;
    document.getElementById('event-badge').textContent = selectedEvent.category;
    document.getElementById('event-short-description').textContent = selectedEvent.shortDescription;
    document.getElementById('event-date').textContent = selectedEvent.date;
    document.getElementById('event-location').textContent = selectedEvent.location;
    document.getElementById('event-description-title').textContent = "عن " + selectedEvent.title;
    // Display Event Target Audience
var audienceElement = document.getElementById('event-target-audience');

if (audienceElement) {
    audienceElement.textContent = selectedEvent.audience || "";
}
    document.getElementById('event-description').textContent = selectedEvent.description;
    // Display Event Objectives
var objectivesList = document.getElementById('event-objectives-list');

if (objectivesList && selectedEvent.objectives) {
    objectivesList.innerHTML = '';

    selectedEvent.objectives.forEach(function(objective) {
        var li = document.createElement('li');
        li.textContent = objective;
        objectivesList.appendChild(li);
    });
}
    document.getElementById('event-image').src = selectedEvent.image;
    // Display event gallery images
if (selectedEvent.galleryImages) {
    document.getElementById('gallery-image-1').src = selectedEvent.galleryImages[0];
    document.getElementById('gallery-image-2').src = selectedEvent.galleryImages[1];
    document.getElementById('gallery-image-3').src = selectedEvent.galleryImages[2];
}
    document.getElementById('event-map-image').src = selectedEvent.mapImage;
    
}
// Display related events
var relatedEventsContainer = document.getElementById('related-events-container');

if (relatedEventsContainer && selectedEvent) {

    var relatedCount = 0;

    for (var id in eventsData) {

        if (id !== eventId && relatedCount < 3) {

            var relatedEvent = eventsData[id];

            var eventCard = document.createElement('article');
            eventCard.className = 'related-event-card';

            eventCard.innerHTML =
                '<img src="' + relatedEvent.image + '" alt="' + relatedEvent.title + '">' +
                '<h3>' + relatedEvent.title + '</h3>' +
                '<p>التاريخ: ' + relatedEvent.date + '</p>' +
                '<a href="event.html?id=' + id + '">عرض التفاصيل</a>';

            relatedEventsContainer.appendChild(eventCard);

            relatedCount++;
        }
    }
}
// Add event to calendar
var calendarButton = document.getElementById('calendarButton');

if (calendarButton) {
    calendarButton.addEventListener('click', function() {

        if (selectedEvent) {

            var dateParts = selectedEvent.date.split('/');
            var calendarDate = dateParts[2] + dateParts[1] + dateParts[0];

            var calendarContent =
                "BEGIN:VCALENDAR\n" +
                "VERSION:2.0\n" +
                "BEGIN:VEVENT\n" +
                "DTSTART:" + calendarDate + "T090000\n" +
                "SUMMARY:" + selectedEvent.title + "\n" +
                "DESCRIPTION:" + selectedEvent.shortDescription + "\n" +
                "LOCATION:" + selectedEvent.location + "\n" +
                "END:VEVENT\n" +
                "END:VCALENDAR";

            var calendarFile = new Blob(
                [calendarContent],
                { type: "text/calendar;charset=utf-8" }
            );

            var downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(calendarFile);
            downloadLink.download = "event.ics";
            downloadLink.click();

            URL.revokeObjectURL(downloadLink.href);

            document.getElementById('eventMessage').textContent =
                "تم تجهيز ملف التقويم بنجاح.";
        }
    });
}
// Share event
var shareButton = document.getElementById('shareButton');

if (shareButton) {
    shareButton.addEventListener('click', function() {

        var eventMessage = document.getElementById('eventMessage');

        var eventLink = window.location.href;

        navigator.clipboard.writeText(eventLink)
            .then(function() {
                eventMessage.textContent =
    "تم نسخ رابط الفعالية بنجاح! يمكنك الآن مشاركته.";
            })
            .catch(function() {
                eventMessage.textContent =
                    "تعذر نسخ الرابط. يرجى نسخه من شريط العنوان.";
            });

    });
}