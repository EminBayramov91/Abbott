
// header accordion
document.querySelectorAll('.header__menu').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('header-active')) {
            parent.classList.remove('header-active');
        }else {
            document
                .querySelectorAll('.header__items')
                .forEach((child) => child.classList.remove('header-active'))
            parent.classList.toggle('header-active');
        }
    })
)


// header btn
const headerSecondBtn = document.getElementsByClassName("header__second-btn")[0];
const headerSecondContent = document.getElementsByClassName("header__second-btn-content")[0];
const headerSecondClose = document.getElementsByClassName("header__second-close")[0];

headerSecondBtn.onclick = function () {
    headerSecondContent.style.display = "grid";
    headerSecondBtn.style.display = "none";
    headerSecondClose.style.display = "block";
}
headerSecondClose.onclick = function () {
    headerSecondContent.style.display = "none";
    headerSecondBtn.style.display = "block";
    headerSecondClose.style.display = "none";
}

// header search
const searchSecondBtn = document.getElementsByClassName("header__second-search-btn")[0];
const searchSecondContent = document.getElementsByClassName("header__second-search-content")[0];
const searchSecondClose = document.getElementsByClassName("header__second-search-close")[0];

searchSecondBtn.onclick = function () {
    searchSecondContent.style.display = "grid";
}
searchSecondClose.onclick = function () {
    searchSecondContent.style.display = "none";
}

const stringToHTML = function (str, elementTag = 'div') {
    let dom = document.createElement(elementTag);
    dom.innerHTML = str;
    return dom;
};

// calendar
const calendarEvents =  [
    {
        title: '12:00 Круглый стол специа',
        start: '2021-11-05T12:00:00',
    },
    {
        title: '14:00 Круглый стол специа',
        start: '2021-11-05T14:00:00',
    },
    {
        title: '16:00 Круглый стол специа',
        start: '2021-11-05T16:00:00',
    },
    {
        title: '18:00 Круглый стол специа',
        start: '2021-11-05T18:00:00',
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2021-11-09T12:00:00',
    },
    {
        title: '18:00 Круглый стол специа',
        start: '2021-11-11T18:00:00',
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2021-11-15T12:00:00',
    },
    {
        title: '18:00 Круглый стол специа',
        start: '2021-11-15T18:00:00',
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2021-11-26T12:00:00',
    },
    {
        title: '14:00 Круглый стол специа',
        start: '2021-11-26T14:00:00',
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2022-11-05T12:00:00',
    },
    {
        title: '12:00 Круглый стол специа',
        start: '2023-11-05T12:00:00',
    },
]

const calendarMonths = [
    {
        title: 'Январь',
        id: 1
    },
    {
        title: 'Февраль',
        id: 2
    },
    {
        title: 'Март',
        id: 3
    },
    {
        title: 'Апрель',
        id: 4
    },
    {
        title: 'Май',
        id: 5
    },
    {
        title: 'Июнь',
        id: 6
    },
    {
        title: 'Июль',
        id: 7
    },
    {
        title: 'Август',
        id: 8
    },
    {
        title: 'Сентябрь',
        id: 9
    },
    {
        title: 'Октябрь',
        id: 10
    },
    {
        title: 'Ноябрь',
        id: 11
    },
    {
        title: 'Декабрь',
        id: 12
    }
]

var fullCalendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    fullCalendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2021-11-01',
        selectable: true,
        locale: 'ru',
        headerToolbar: {
            right: '',
            left: '',
            center: ''
        },
        views: {
            year: {
                type: 'listYear',
                dateIncrement: { years: 1 },
                slotDuration: { months: 1 },
            }
        },
        events: calendarEvents
    });

    fullCalendar.render();
    onSelectDate()
});


const calendarYearSelect = document.querySelector('#calendarYearSelect')
const calendarMonthSelect = document.querySelector('#calendarMonthSelect')

const onSelectDate = () => {
    const year = calendarYearSelect.value
    const month = calendarMonthSelect.value
    const date = `${year}-${month < 10 ? `0${month}` : month}-01T00:00:00Z`
    fullCalendar.gotoDate(date)
}

[calendarYearSelect, calendarMonthSelect].forEach(element => {
    element.addEventListener('change', onSelectDate)
})

const addedYears = {}
calendarEvents.forEach(ce => {
    const year = ce.start.slice(0, 4)
    if (!addedYears[year]) {
        addedYears[year] = true
        const option = stringToHTML(`
            ${year}
        `, 'option')
        option.setAttribute('value', year)
        calendarYearSelect.appendChild(option)
    }
})
calendarMonths.forEach(cm => {
    const option = stringToHTML(`
        ${cm.title}
    `, 'option')
    option.setAttribute('value', cm.id)
    calendarMonthSelect.appendChild(option)
})

// preps accordion

document.querySelectorAll('.preps__top-accordion').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('preps__top-active')) {
            parent.classList.remove('preps__top-active');
        }else {
            document
                .querySelectorAll('.preps__top-item')
                .forEach((child) => child.classList.remove('preps__top-active'))
            parent.classList.toggle('preps__top-active');
        }
    })
)

// docks accordion

document.querySelectorAll('.docks__items').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('docks-active')) {
            parent.classList.remove('docks-active');
        }else {
            document
                .querySelectorAll('.docks__inner')
                .forEach((child) => child.classList.remove('docks-active'))
            parent.classList.toggle('docks-active');
        }
    })
)


// cal
const activeSwitch = () => {
    const firstOption = document.querySelector('.switcher-option-one');
    const secondOption = document.querySelector('.switcher-option-two');

    if (firstOption.classList.contains('active')) {
        firstOption.classList.remove('active')
        secondOption.classList.add('active')
        fullCalendar.changeView('year')
    } else  {
        firstOption.classList.add('active')
        secondOption.classList.remove('active')
        fullCalendar.changeView('dayGridMonth')
    }
}

