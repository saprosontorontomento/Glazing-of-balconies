const timer = (id, deadline) => {
    const addAZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t / 1000 / 60) % 60),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addAZero(t.days);
            hours.textContent = addAZero(t.hours);
            minutes.textContent = addAZero(t.minutes);
            seconds.textContent = addAZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                min.textContent = "00";
                sec.textContent = "00";

                clearInterval(timeInterval);
            }
        };
    };

    setClock(id, deadline);

};

export default timer;