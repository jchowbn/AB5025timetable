// Helper function to parse time strings (e.g., "8:30 PM") into 24-hour format
function parseTime(timeStr) {
    const [time, ampm] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (ampm === 'PM' && hours !== 12) {
        hours += 12;
    } else if (ampm === 'AM' && hours === 12) { // Midnight (12 AM)
        hours = 0;
    }
    return hours + minutes / 60;
}

// Array containing all event data, now with location property
const events = {
    'fri': [
        { time: '18:00 - 20:00', event: 'Augustin Da Sambagio (Potato Head – Bali)', venue: 'Socio', start: 18, end: 20, location: 'Hong Kong' },
        { time: '18:30 - 21:30', event: 'Jigger & Pony (Singapore)', venue: 'The Macallan House', start: 18.5, end: 21.5, location: 'Hong Kong' },
        { time: '19:00 - 21:00', event: 'Lakeview Palace x Yong Fu x Tell Camellia Tea-Tales', venue: 'Lakeview Palace', start: 19, end: 21, location: 'Macau' },
        { time: '19:00 - 22:00', event: 'Julio Bermejo & Dre Masso', venue: 'Coa', start: 19, end: 22, location: 'Hong Kong' },
        { time: '19:00 - 23:00', event: 'Elliot Faber Takes Over Mizumi', venue: 'Wynn Palace Mizumi', start: 19, end: 23, location: 'Macau' },
        { time: '19:00 - 23:00', event: 'Atlas (Singapore)', venue: 'Lobster Bar', start: 19, end: 23, location: 'Hong Kong' },
        { time: '20:00 - 23:00', event: 'Nepal\'s Finest: Barc | Tell Camellia | Courtroom', venue: 'Wing Lei Bar', start: 20, end: 23, location: 'Macau' },
        { time: '20:00 - 23:00', event: 'Keegan McGregor\'s World Class Takeover', venue: 'SW Steakhouse', start: 20, end: 23, location: 'Macau' },
        { time: '20:00 - 23:00', event: 'Amanda Wan (Three X Co – Kuala Lumpur)', venue: 'Avoca', start: 20, end: 23, location: 'Hong Kong' },
        { time: '20:00 - 23:00', event: 'Bar Us (Bangkok)', venue: 'Green Room', start: 20, end: 23, location: 'Hong Kong' },
        { time: '21:00 - 00:00', event: 'Weiqin Li (Bathe Coffee)', venue: 'The Gallery Bar Macao', start: 21, end: 24, location: 'Macau' }
    ],
    'sat': [
        { time: '15:00 - 17:00', event: '8 Hands Industry Cocktails', venue: 'Avoca', start: 15, end: 17, location: 'Hong Kong' },
        { time: '17:00 - 19:00', event: 'Panjak Balachandran & Macleigh Rey Fernandes (Boilermaker – Goa)', venue: 'Bourke\'s', start: 17, end: 19, location: 'Hong Kong' },
        { time: '18:00 - 20:00', event: 'Chef Tam\'s Seasons x Bar Mood', venue: 'Chef Tam\'s Seasons', start: 18, end: 20, location: 'Macau' },
        { time: '18:00 - 20:00', event: 'Epic (Shanghai)', venue: 'The Old Man', start: 18, end: 20, location: 'Hong Kong' },
        { time: '18:30 - 21:30', event: 'Atlas (Singapore)', venue: 'The Macallan House', start: 18.5, end: 21.5, location: 'Hong Kong' },
        { time: '19:00 - 21:00', event: 'Drunken Fish x Maybe Sammy (50 Best Signature Sessions)', venue: 'Drunken Fish', start: 19, end: 21, location: 'Macau' },
        { time: '19:00 - 21:00', event: 'Wing Lei Bar Showcase: Mark Lloyd', venue: 'Wing Lei Bar', start: 19, end: 21, location: 'Macau' },
        { time: '19:00 - 21:00', event: 'Marco Dongi (Bar Sathorn – Bangkok)', venue: 'Ozone', start: 19, end: 21, location: 'Hong Kong' },
        { time: '19:00 - 23:00', event: 'Jigger & Pony (Singapore)', venue: 'Lobster Bar', start: 19, end: 23, location: 'Hong Kong' },
        { time: '20:00 - 23:00', event: 'Sober Company (Shanghai)', venue: 'Avoca', start: 20, end: 23, location: 'Hong Kong' },
        { time: '20:00 - 23:00', event: 'Hideaway Bar (Goa)', venue: 'Barcode', start: 20, end: 23, location: 'Hong Kong' },
        { time: '20:00 - 23:00', event: 'Shingo Sasaki (Sober Company – Shanghai)', venue: 'Ritz Carlton Bar and Lounge Macau', start: 20, end: 23, location: 'Macau' },
        { time: '20:00 - 23:00', event: 'Shin Lee & Ribo Lee (Bar Geranium – Seoul)', venue: '25:00', start: 20, end: 23, location: 'Hong Kong' },
        { time: '20:00 - 00:00', event: 'Santo Metodo (Zuma – Bangkok)', venue: 'The Wise King', start: 20, end: 24, location: 'Hong Kong' },
        { time: '20:30 - 23:30', event: 'Dave Lam (The Dolomite – Shenzhen)', venue: 'Bar Buonasera', start: 20.5, end: 23.5, location: 'Hong Kong' },
        { time: '20:30 - 23:30', event: 'Pera Srisuk (The Fool Speakeasy – Phuket)', venue: 'Foxglove', start: 20.5, end: 23.5, location: 'Hong Kong' },
        { time: '21:00 - 23:00', event: 'Orsu Loviconi & Awaraa Awarzed', venue: 'Roucou', start: 21, end: 23, location: 'Hong Kong' },
        { time: '21:00 - 23:30', event: 'Julio Bermejo & Sam Ross', venue: 'Wing Lei Bar', start: 21, end: 23.5, location: 'Macau' },
        { time: '21:00 - 00:00', event: 'Paul Zhang', venue: 'The Gallery Bar Macao', start: 21, end: 24, location: 'Macau' },
        { time: '22:00 - 02:00', event: 'Bar Pop-up: Teresa Cocktail Bar x ZLB23', venue: 'Palace Reserve Club', start: 22, end: 26, location: 'Macau' },
        { time: '22:30 - 02:00', event: 'Happy Accidents, PS40, Artesian Bar, Manhattan Bar', venue: 'The Aubrey', start: 22.5, end: 26, location: 'Hong Kong' }
    ],
    'sun': [
        { time: '12:00 - 14:00', event: 'Sushi Mizumi x Martiny\'s (50 Best Signature Sessions)', venue: 'Wynn Palace Mizumi', start: 12, end: 14, location: 'Macau' },
        { time: '15:00 - 18:00', event: 'Rainbow Takeover: Mostly Harmless | Artifact', venue: 'Wing Lei Bar', start: 15, end: 18, location: 'Macau' },
        { time: '15:00 - 18:00', event: 'Honky Tonks Tavern | Potato Head Beach Club', venue: 'Palace Reserve Club', start: 15, end: 18, location: 'Macau' },
        { time: '16:00 - 19:00', event: 'Atlas (Singapore) & Cosmo Pony (Jakarta)', venue: 'The Opposites', start: 16, end: 19, location: 'Hong Kong' }
    ],
    'jul15': [
        { time: '1:00 PM - 3:00 PM', event: 'Chef Tam’s Seasons x Masque x Sidecar', venue: 'Chef Tam\'s Seasons, Wynn Palace', start: 13, end: 15, location: 'Macau' },
        { time: '6:00 PM - 10:00 PM', event: 'Asia’s 50 Best Bars', venue: 'Wynn Palace', start: 18, end: 22, location: 'Macau' },
        { time: '8:30 PM - 12:30 AM', event: 'Bar Cham x Alice x Le Chamber x Pine & Co', venue: 'Long Bar, Galaxy Hotel', start: 20.5, end: 24.5, location: 'Macau' },
        { time: '10:00 PM - 1:00 AM', event: 'Bae’s Cocktail Club (Singapore)', venue: 'The Diplomat', start: 22, end: 25, location: 'Hong Kong' },
        { time: '10:00 PM - 1:00 AM', event: 'Taln & Aum (Bar Us – Bangkok)', venue: 'Mesa Bar, THE KARL LAGERFELD', start: 22, end: 25, location: 'Macau' },
        { time: '10:00 PM - 12:00 AM', event: 'Cat Bite Club (Singapore) | Reka (Kuala Lumpur)', venue: 'St. Regis Bar Macau', start: 22, end: 24, location: 'Macau' },
        { time: '10:00 PM - 2:00 AM', event: 'Official After Party: Freni e Frizioni | Vender | Bar Myung | Dead Poets', venue: 'Palace Reserve Club, Wynn Palace', start: 22, end: 26, location: 'Macau' },
        { time: '10:00 PM - 2:00 AM', event: 'Nicola Lazzari & Giuseppe Destefano (1920 – Dubai)', venue: 'Mesa Bar, THE KARL LAGERFELD', start: 22, end: 26, location: 'Macau' },
        { time: '11:00 PM - 1:00 AM', event: 'Cat Bite Club (Singapore) | The Cocktail Club (Jakarta)', venue: 'Argo', start: 23, end: 25, location: 'Hong Kong' },
        { time: '11:00 PM - 3:30 AM', event: 'Torres Brandy After Party by Hope & Sesame, Two Moons, & Night Hawk', venue: 'Moon on Planet, Studio City Macau', start: 23, end: 27.5, location: 'Macau' }
    ],
    'jul16': [
        { time: '12:00 AM - 2:00 AM', event: 'Soko (Seoul) | Vesper (Bangkok)', venue: 'St. Regis Bar Macau', start: 0, end: 2, location: 'Macau' },
        { time: '3:00 PM - 5:00 PM', event: 'Wing Lei Bar Showcase: Mark Lloyd', venue: 'Wing Lei Bar, Wynn Palace', start: 15, end: 17, location: 'Macau' },
        { time: '4:00 PM - 7:00 PM', event: 'Locale Firenze (Florence) | Moebius (Milan)', venue: 'Bar Leone', start: 16, end: 19, location: 'Hong Kong' },
        { time: '6:00 PM - 8:00 PM', event: 'Three Cents Guest Shift', venue: 'Penicillin', start: 18, end: 20, location: 'Hong Kong' },
        { time: '6:00 PM - 9:00 PM', event: 'Soko & One (Bar Soko – Seoul)', venue: 'The Old Man', start: 18, end: 21, location: 'Hong Kong' },
        { time: '7:00 PM - 11:00 PM', event: 'Wayne 安威 (Bar Hide – Taoyuan)', venue: 'Bar De Luxe', start: 19, end: 23, location: 'Hong Kong' },
        { time: '7:00 PM - 11:00 PM', event: 'Ale May (Iron Balls – Bangkok)', venue: 'Paragon', start: 19, end: 23, location: 'Hong Kong' },
        { time: '7:00 PM - 11:00 PM', event: 'Terry, Mason, Halim, and Eggsy (Alice Cheongdam – Seoul)', venue: 'Soho House', start: 19, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Seven Yi (Room by Le Kief – Taipei) & Hiroyasu Kayama (Bar Benfiddich – Tokyo)', venue: 'The Opposites', start: 20, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Jerrold Khoo & Cyrus Wang (Stay Gold – Singapore)', venue: 'Kinsman', start: 20, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Handshake Speakeasy (CDMX)', venue: 'Gokan', start: 20, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Backdoor Bodega (Penang)', venue: 'Tell Camellia', start: 20, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Bar Bud (Shanghai)', venue: 'Barcode', start: 20, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Rabbit Hole – Bangkok', venue: 'Dead Poets', start: 20, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Roy & Jude (Pomme Bar – Seoul)', venue: 'Orchard', start: 20, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Shaken & Sung', venue: 'The Green Door', start: 20, end: 23, location: 'Hong Kong' },
        { time: '9:00 PM - 11:30 PM', event: 'Erika & Gabriel (Cat Bite Club – Singapore)', venue: 'The Old Man', start: 21, end: 23.5, location: 'Hong Kong' },
        { time: '9:00 PM - 12:00 AM', event: 'Kei Takahashi & Michito Kaneko (Lamp Bar – Nara)', venue: 'Uncle Ming\'s', start: 21, end: 24, location: 'Hong Kong' },
        { time: '9:00 PM - 1:00 AM', event: 'Yong Wei (Native – Singapore)', venue: 'Bar Patua', start: 21, end: 25, location: 'Macau' }
    ],
    'jul17': [
        { time: '2:00 PM - 3:00 PM', event: 'Three Cents Master Class', venue: 'Taqueria Super Macho', start: 14, end: 15, location: 'Hong Kong' },
        { time: '6:00 PM - 8:00 PM', event: 'Malt + Mixology Space (Seoul)', venue: 'Lobster Bar', start: 18, end: 20, location: 'Hong Kong' },
        { time: '7:00 PM - 11:00 PM', event: 'Austen (Blotto)', venue: 'Not 2 Sweet', start: 19, end: 23, location: 'Hong Kong' },
        { time: '8:00 PM - 10:00 PM', event: 'Bar Cham (Seoul)', venue: 'Lobster Bar', start: 20, end: 22, location: 'Hong Kong' },
        { time: '8:00 PM - 11:00 PM', event: 'Ngo Kim Uyen (Ne – Hanoi) | Lam Duc Anh (Stir – HCMC)', venue: 'Ritz Carlton Bar and Lounge Macau', start: 20, end: 23, location: 'Macau' }
    ]
};

const timetableDisplay = document.getElementById('timetable-display');
const btnFri = document.getElementById('btn-fri');
const btnSat = document.getElementById('btn-sat');
const btnSun = document.getElementById('btn-sun');
const btnJul15 = document.getElementById('btn-jul15');
const btnJul16 = document.getElementById('btn-jul16');
const btnJul17 = document.getElementById('btn-jul17');

const btnHK = document.getElementById('btn-hk');
const btnMacau = document.getElementById('btn-macau');

let currentDay = 'jul16'; // Default to July 16
let currentLocation = 'Hong Kong'; // Default to Hong Kong

// Function to render the timetable for a given day and location filter
function renderTimetable(dayEvents, dayName, locationFilter, minHour, maxHour) {
    let filteredEvents = dayEvents.filter(event => event.location === locationFilter);

    // If no events for the selected filter, show a message
    if (filteredEvents.length === 0) {
        timetableDisplay.innerHTML = `
            <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">${dayName}</h2>
            <p class="text-gray-600 text-center text-lg mt-8">No events found for ${locationFilter} on this day.</p>
        `;
        return;
    }

    let html = `
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">${dayName} - ${locationFilter} Events</h2>
        <div class="time-axis">
    `;

    // Generate time axis labels based on minHour and maxHour
    for (let h = minHour; h <= maxHour; h++) {
        let hourLabel;
        if (h === 24) {
            hourLabel = '12 AM'; // Midnight of the current day
        } else if (h > 24) {
            hourLabel = `${h - 24} AM (Next)`; // Hours into the next day
        } else {
            hourLabel = h % 12 === 0 ? 12 : h % 12;
            hourLabel += h < 12 ? ' AM' : ' PM';
        }
        html += `<div class="time-label">${hourLabel}</div>`;
    }
    html += `</div><div class="relative pt-4">`; // Add padding top here to ensure event blocks don't overlap with time axis

    // Sort events by their start time to ensure proper rendering
    filteredEvents.sort((a, b) => a.start - b.start);

    // Calculate overall duration for scaling
    const totalDuration = maxHour - minHour;
    const hourWidth = 100 / totalDuration; // Percentage width for one hour

    // Render each event as a block
    filteredEvents.forEach(event => {
        const startTimeOffset = event.start - minHour;
        const duration = event.end - event.start;
        const leftPosition = startTimeOffset * hourWidth;
        const width = duration * hourWidth;

        // Ensure width and leftPosition are within valid range (0-100%)
        const safeLeft = Math.max(0, Math.min(100, leftPosition));
        const safeWidth = Math.max(0, Math.min(100 - safeLeft, width)); // Adjust width if it goes beyond 100%

        html += `
            <div class="event-row">
                <div class="event-label">${event.venue}</div>
                <div class="event-timeline relative">
                    <div class="event-block" style="left: ${safeLeft}%; width: ${safeWidth}%;">
                        <span>${event.event}</span>
                        <div class="tooltip">
                            <strong>${event.time}</strong><br>
                            ${event.event}<br>
                            at ${event.venue}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`; // Close relative div
    timetableDisplay.innerHTML = html;
}

// Function to get min/max hours for a given day's events, considering the location filter
function getMinMaxHours(eventsList, locationFilter) {
    const filtered = eventsList.filter(event => event.location === locationFilter);
    if (filtered.length === 0) return { min: 12, max: 24 }; // Default to a reasonable range if no filtered events

    let min = filtered[0].start;
    let max = filtered[0].end;

    filtered.forEach(event => {
        if (event.start < min) min = event.start;
        if (event.end > max) max = event.end;
    });
    // Ensure the time range spans full hours, adjusting for events crossing midnight
    return { min: Math.floor(min), max: Math.ceil(max) > 24 ? Math.ceil(max) : Math.ceil(max) };
}

// Event listeners for day buttons
btnFri.addEventListener('click', () => {
    currentDay = 'fri';
    updateTimetable();
    setActiveButtonDay('fri');
});

btnSat.addEventListener('click', () => {
    currentDay = 'sat';
    updateTimetable();
    setActiveButtonDay('sat');
});

btnSun.addEventListener('click', () => {
    currentDay = 'sun';
    updateTimetable();
    setActiveButtonDay('sun');
});

// New event listeners for July 15, 16 and 17
btnJul15.addEventListener('click', () => {
    currentDay = 'jul15';
    updateTimetable();
    setActiveButtonDay('jul15');
});
btnJul16.addEventListener('click', () => {
    currentDay = 'jul16';
    updateTimetable();
    setActiveButtonDay('jul16');
});

btnJul17.addEventListener('click', () => {
    currentDay = 'jul17';
    updateTimetable();
    setActiveButtonDay('jul17');
});

// Event listeners for location buttons
btnHK.addEventListener('click', () => {
    currentLocation = 'Hong Kong';
    updateTimetable();
    setActiveButtonLocation('hk');
});

btnMacau.addEventListener('click', () => {
    currentLocation = 'Macau';
    updateTimetable();
    setActiveButtonLocation('macau');
});

// Main function to update the timetable based on current day and location
function updateTimetable() {
    const dayEvents = events[currentDay];
    const { min, max } = getMinMaxHours(dayEvents, currentLocation);
    let dayName = '';
    if (currentDay === 'fri') dayName = 'Friday, July 11, 2025';
    else if (currentDay === 'sat') dayName = 'Saturday, July 12, 2025';
    else if (currentDay === 'sun') dayName = 'Sunday, July 13, 2025';
    else if (currentDay === 'jul15') dayName = 'Tuesday, July 15, 2025';
    else if (currentDay === 'jul16') dayName = 'Wednesday, July 16, 2025';
    else if (currentDay === 'jul17') dayName = 'Thursday, July 17, 2025';

    renderTimetable(dayEvents, dayName, currentLocation, min, max);
}

// Function to set active button styling for days
function setActiveButtonDay(day) {
    [btnFri, btnSat, btnSun, btnJul15, btnJul16, btnJul17].forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');
        btn.classList.add('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
    });

    let activeButton;
    if (day === 'fri') activeButton = btnFri;
    else if (day === 'sat') activeButton = btnSat;
    else if (day === 'sun') activeButton = btnSun;
    else if (day === 'jul15') activeButton = btnJul15;
    else if (day === 'jul16') activeButton = btnJul16;
    else if (day === 'jul17') activeButton = btnJul17;

    if (activeButton) {
        activeButton.classList.remove('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
        activeButton.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');
    }
}

// Function to set active button styling for locations
function setActiveButtonLocation(location) {
    [btnHK, btnMacau].forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');
        btn.classList.add('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
    });

    let activeButton;
    if (location === 'hk') activeButton = btnHK;
    else if (location === 'macau') activeButton = btnMacau;

    if (activeButton) {
        activeButton.classList.remove('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
        activeButton.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');
    }
}

// Initial render: Set July 16 as default day and Hong Kong as default location
window.onload = function() {
    setActiveButtonDay(currentDay);
    setActiveButtonLocation(currentLocation === 'Hong Kong' ? 'hk' : 'macau');
    updateTimetable();
};
