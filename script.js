// Data for events
const events = {
    'fri': [
        { name: 'Augustin Da Sambagio (Potato Head – Bali)', venue: 'Socio', start: 18.00, end: 20.00, location: 'Hong Kong' },
        { name: 'Jigger & Pony (Singapore)', venue: 'The Macallan House', start: 18.50, end: 21.50, location: 'Hong Kong' },
        { name: 'Lakeview Palace x Yong Fu x Tell Camellia Tea-Tales', venue: 'Lakeview Palace', start: 19.00, end: 21.00, location: 'Macau' },
        { name: 'Julio Bermejo & Dre Masso', venue: 'Coa', start: 19.00, end: 22.00, location: 'Hong Kong' },
        { name: 'Elliot Faber Takes Over Mizumi', venue: 'Wynn Palace Mizumi', start: 19.00, end: 23.00, location: 'Macau' },
        { name: 'Atlas (Singapore)', venue: 'Lobster Bar', start: 19.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Nepal\'s Finest: Barc | Tell Camellia | Courtroom', venue: 'Wing Lei Bar', start: 20.00, end: 23.00, location: 'Macau' },
        { name: 'Keegan McGregor\'s World Class Takeover', venue: 'SW Steakhouse', start: 20.00, end: 23.00, location: 'Macau' },
        { name: 'Amanda Wan (Three X Co – Kuala Lumpur)', venue: 'Avoca', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Bar Us (Bangkok)', venue: 'Green Room', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Weiqin Li (Bathe Coffee)', venue: 'The Gallery Bar Macao', start: 21.00, end: 24.00, location: 'Macau' },
    ],
    'sat': [
        { name: '8 Hands Industry Cocktails', venue: 'Avoca', start: 15.00, end: 17.00, location: 'Hong Kong' },
        { name: 'Panjak Balachandran & Macleigh Rey Fernandes (Boilermaker – Goa)', venue: 'Bourke\'s', start: 17.00, end: 19.00, location: 'Hong Kong' },
        { name: 'Chef Tam\'s Seasons x Bar Mood', venue: 'Chef Tam\'s Seasons', start: 18.00, end: 20.00, location: 'Macau' },
        { name: 'Epic (Shanghai)', venue: 'The Old Man', start: 18.00, end: 20.00, location: 'Hong Kong' },
        { name: 'Atlas (Singapore)', venue: 'The Macallan House', start: 18.50, end: 21.50, location: 'Hong Kong' },
        { name: 'Drunken Fish x Maybe Sammy (50 Best Signature Sessions)', venue: 'Drunken Fish', start: 19.00, end: 21.00, location: 'Macau' },
        { name: 'Wing Lei Bar Showcase: Mark Lloyd', venue: 'Wing Lei Bar', start: 19.00, end: 21.00, location: 'Macau' },
        { name: 'Marco Dongi (Bar Sathorn – Bangkok)', venue: 'Ozone', start: 19.00, end: 21.00, location: 'Hong Kong' },
        { name: 'Jigger & Pony (Singapore)', venue: 'Lobster Bar', start: 19.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Sober Company (Shanghai)', venue: 'Avoca', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Hideaway Bar (Goa)', venue: 'Barcode', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Shingo Sasaki (Sober Company – Shanghai)', venue: 'Ritz Carlton Bar and Lounge Macau', start: 20.00, end: 23.00, location: 'Macau' },
        { name: 'Shin Lee & Ribo Lee (Bar Geranium – Seoul)', venue: '25:00', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Santo Metodo (Zuma – Bangkok)', venue: 'The Wise King', start: 20.00, end: 24.00, location: 'Hong Kong' },
        { name: 'Dave Lam (The Dolomite – Shenzhen)', venue: 'Bar Buonasera', start: 20.50, end: 23.50, location: 'Hong Kong' },
        { name: 'Pera Srisuk (The Fool Speakeasy – Phuket)', venue: 'Foxglove', start: 20.50, end: 23.50, location: 'Hong Kong' },
        { name: 'Orsu Loviconi & Awaraa Awarzed', venue: 'Roucou', start: 21.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Julio Bermejo & Sam Ross', venue: 'Wing Lei Bar', start: 21.00, end: 23.50, location: 'Macau' },
        { name: 'Paul Zhang', venue: 'The Gallery Bar Macao', start: 21.00, end: 24.00, location: 'Macau' },
        { name: 'Bar Pop-up: Teresa Cocktail Bar x ZLB23', venue: 'Palace Reserve Club', start: 22.00, end: 26.00, location: 'Macau' },
        { name: 'Happy Accidents, PS40, Artesian Bar, Manhattan Bar', venue: 'The Aubrey', start: 22.50, end: 26.00, location: 'Hong Kong' },
    ],
    'sun': [
        { name: 'Sushi Mizumi x Martiny\'s (50 Best Signature Sessions)', venue: 'Wynn Palace Mizumi', start: 12.00, end: 14.00, location: 'Macau' },
        { name: 'Rainbow Takeover: Mostly Harmless | Artifact', venue: 'Wing Lei Bar', start: 15.00, end: 18.00, location: 'Macau' },
        { name: 'Honky Tonks Tavern | Potato Head Beach Club', venue: 'Palace Reserve Club', start: 15.00, end: 18.00, location: 'Macau' },
        { name: 'Atlas (Singapore) & Cosmo Pony (Jakarta)', venue: 'The Opposites', start: 16.00, end: 19.00, location: 'Hong Kong' },
        { name: 'Opium – Bangkok', venue: 'Dead Poets', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Shingo Sasaki (Sober Company – Shanghai) & Andy Chu (One or Two Bar – Melbourne)', venue: 'Ritz Carlton Bar and Lounge Macau', start: 20.50, end: 23.50, location: 'Macau' },
        { name: 'Leo Seo & Kai Choi (Jangseang Healthy Bar – Seoul)', venue: 'The Polo Club', start: 21.00, end: 24.00, location: 'Hong Kong' },
        { name: 'Iichiko Takeover: Holly Graham & Beckaly Franks', venue: 'Wynn Palace Mizumi', start: 22.00, end: 26.00, location: 'Macau' },
        { name: 'Schofield\'s | Hey Palu | Kwant', venue: 'Palace Reserve Club', start: 23.00, end: 25.00, location: 'Macau' },
        { name: 'Laowai', venue: 'Wing Lei Bar', start: 23.50, end: 25.50, location: 'Macau' },
    ],
    'jul15': [
        { name: 'Chef Tam\'s Seasons x Masque x Sidecar', venue: 'Chef Tam\'s Seasons', start: 13.00, end: 15.00, location: 'Macau' },
        { name: 'Asia’s 50 Best Bars', venue: 'Wynn Palace', start: 18.00, end: 22.00, location: 'Macau' },
        { name: 'Bar Cham x Alice x Le Chamber x Pine & Co', venue: 'Long Bar, Galaxy Hotel', start: 20.50, end: 24.50, location: 'Macau' },
        { name: 'Bae’s Cocktail Club (Singapore)', venue: 'The Diplomat', start: 22.00, end: 25.00, location: 'Hong Kong' },
        { name: 'Taln & Aum (Bar Us – Bangkok)', venue: 'Mesa Bar, THE KARL LAGERFELD', start: 22.00, end: 25.00, location: 'Macau' },
        { name: 'Cat Bite Club (Singapore) | Reka (Kuala Lumpur)', venue: 'St. Regis Bar Macau', start: 22.00, end: 24.00, location: 'Macau' },
        { name: 'Official After Party: Freni e Frizioni | Vender | Bar Myung | Dead Poets', venue: 'Palace Reserve Club', start: 22.00, end: 26.00, location: 'Macau' },
        { name: 'Nicola Lazzari & Giuseppe Destefano (1920 – Dubai)', venue: 'Mesa Bar, THE KARL LAGERFELD', start: 22.00, end: 26.00, location: 'Macau' },
        { name: 'Cat Bite Club (Singapore) | The Cocktail Club (Jakarta)', venue: 'Argo', start: 23.00, end: 25.00, location: 'Hong Kong' },
        { name: 'Torres Brandy After Party by Hope & Sesame, Two Moons, & Night Hawk', venue: 'Moon on Planet, Studio City Macau', start: 23.00, end: 27.50, location: 'Macau' },
    ],
    'jul16': [
        { name: 'Soko (Seoul) | Vesper (Bangkok)', venue: 'St. Regis Bar Macau', start: 0.00, end: 2.00, location: 'Macau' },
        { name: 'Wing Lei Bar Showcase: Mark Lloyd', venue: 'Wing Lei Bar', start: 15.00, end: 17.00, location: 'Macau' },
        { name: 'Locale Firenze (Florence) | Moebius (Milan)', venue: 'Bar Leone', start: 16.00, end: 19.00, location: 'Hong Kong' },
        { name: 'Three Cents Guest Shift', venue: 'Penicillin', start: 18.00, end: 20.00, location: 'Hong Kong' },
        { name: 'Soko & One (Bar Soko – Seoul)', venue: 'The Old Man', start: 18.00, end: 21.00, location: 'Hong Kong' },
        { name: 'Wayne 安威 (Bar Hide – Taoyuan)', venue: 'Bar De Luxe', start: 19.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Ale May (Iron Balls – Bangkok)', venue: 'Paragon', start: 19.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Terry, Mason, Halim, and Eggsy (Alice Cheongdam – Seoul)', venue: 'Soho House', start: 19.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Seven Yi (Room by Le Kief – Taipei) & Hiroyasu Kayama (Bar Benfiddich – Tokyo)', venue: 'The Opposites', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Jerrold Khoo & Cyrus Wang (Stay Gold – Singapore)', venue: 'Kinsman', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Handshake Speakeasy (CDMX)', venue: 'Gokan', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Backdoor Bodega (Penang)', venue: 'Tell Camellia', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Bar Bud (Shanghai)', venue: 'Barcode', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Rabbit Hole – Bangkok', venue: 'Dead Poets', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Roy & Jude (Pomme Bar – Seoul)', venue: 'Orchard', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Shaken & Sung', venue: 'The Green Door', start: 20.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Erika & Gabriel (Cat Bite Club – Singapore)', venue: 'The Old Man', start: 21.00, end: 23.50, location: 'Hong Kong' },
        { name: 'Kei Takahashi & Michito Kaneko (Lamp Bar – Nara)', venue: 'Uncle Ming\'s', start: 21.00, end: 24.00, location: 'Hong Kong' },
        { name: 'Yong Wei (Native – Singapore)', venue: 'Bar Patua', start: 21.00, end: 25.00, location: 'Macau' },
    ],
    'jul17': [
        { name: 'Three Cents Master Class', venue: 'Taqueria Super Macho', start: 14.00, end: 15.00, location: 'Hong Kong' },
        { name: 'Malt + Mixology Space (Seoul)', venue: 'Lobster Bar', start: 18.00, end: 20.00, location: 'Hong Kong' },
        { name: 'Austen (Blotto)', venue: 'Not 2 Sweet', start: 19.00, end: 23.00, location: 'Hong Kong' },
        { name: 'Bar Cham (Seoul)', venue: 'Lobster Bar', start: 20.00, end: 22.00, location: 'Hong Kong' },
        { name: 'Ngo Kim Uyen (Ne – Hanoi) | Lam Duc Anh (Stir – HCMC)', venue: 'Ritz Carlton Bar and Lounge Macau', start: 20.00, end: 23.00, location: 'Macau' },
    ]
};

const timetableDisplay = document.getElementById('timetable-display');
const btnFri = document.getElementById('btn-fri');
const btnSat = document.getElementById('btn-sat');
const btnSun = document.getElementById('btn-sun');
const btnJul15 = document.getElementById('btn-jul15');
const btnJul16 = document.getElementById('btn-jul16');
const btnJul17 = document.getElementById('btn-jul17');
const btnHk = document.getElementById('btn-hk');
const btnMacau = document.getElementById('btn-macau');

let currentDay = 'jul16'; // Default to Wednesday, Jul 16
let currentLocation = 'hong-kong'; // Default to Hong Kong Events

// Function to render the timetable
function renderTimetable() {
    const selectedEvents = events[currentDay].filter(event => {
        if (currentLocation === 'hong-kong') {
            return event.location === 'Hong Kong';
        } else if (currentLocation === 'macau') {
            return event.location === 'Macau';
        }
        return true; // Should not happen with current logic, but as a fallback
    });

    // Clear previous timetable
    timetableDisplay.innerHTML = '';

    if (selectedEvents.length === 0) {
        timetableDisplay.innerHTML = `<p class="text-gray-600 text-center py-8">No events listed for ${currentDay.replace('fri', 'Friday, July 11').replace('sat', 'Saturday, July 12').replace('sun', 'Sunday, July 13').replace('jul15', 'Tuesday, July 15').replace('jul16', 'Wednesday, July 16').replace('jul17', 'Thursday, July 17')} in ${currentLocation === 'hong-kong' ? 'Hong Kong' : 'Macau'}.</p>`;
        return;
    }

    // Determine min/max hours for the timeline based on filtered events
    let minHour = 24;
    let maxHour = 0;
    selectedEvents.forEach(event => {
        minHour = Math.floor(Math.min(minHour, event.start));
        maxHour = Math.ceil(Math.max(maxHour, event.end));
    });

    // Adjust maxHour if range is too small (e.g., all events finish early)
    if (maxHour - minHour < 4) { // Ensure at least a 4-hour display
        if (minHour > 0) minHour = Math.max(0, maxHour - 4);
        else maxHour = Math.min(24, minHour + 4);
    }
    // Ensure at least 6 hours are shown
    if (maxHour - minHour < 6) {
        maxHour = Math.min(26, minHour + 6); // Max 26 for events crossing midnight slightly
        if (maxHour - minHour < 6) { // If still less than 6, try extending minHour
             minHour = Math.max(0, maxHour - 6);
        }
    }


    const numHours = maxHour - minHour;

    // Create the grid wrapper
    const gridWrapper = document.createElement('div');
    gridWrapper.classList.add('grid-wrapper');
    gridWrapper.style.setProperty('--num-hours', numHours);
    gridWrapper.style.setProperty('--num-events', selectedEvents.length + 1); // +1 for time labels row

    // Add time labels
    const timeLabelsContainer = document.createElement('div');
    timeLabelsContainer.classList.add('time-labels');
    for (let h = minHour; h <= maxHour; h++) {
        const timeLabel = document.createElement('div');
        timeLabel.classList.add('time-label');
        let displayHour = h % 24;
        if (displayHour < 0) displayHour += 24; // Handle negative hours if any event starts before 0:00 (e.g. 23:00 - 02:00)
        timeLabel.textContent = `${String(displayHour).padStart(2, '0')}:00`;
        timeLabelsContainer.appendChild(timeLabel);
    }
    gridWrapper.appendChild(timeLabelsContainer);


    // Add event blocks
    selectedEvents.forEach((event, index) => {
        const startCol = ((event.start - minHour) / numHours) * numHours + 1; // Column start
        const endCol = ((event.end - minHour) / numHours) * numHours + 1; // Column end
        const row = index + 2; // Rows start from 1, time labels are row 1

        const eventBlock = document.createElement('div');
        eventBlock.classList.add('event-block');
        eventBlock.classList.add(event.location === 'Hong Kong' ? 'hong-kong' : 'macau');
        eventBlock.style.gridColumnStart = Math.round(startCol);
        eventBlock.style.gridColumnEnd = Math.round(endCol);
        eventBlock.style.gridRow = row;

        // Display venue and event name
        eventBlock.innerHTML = `<strong>${event.venue}:</strong><br>${event.name}`;

        // Tooltip for full details
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = `<strong>${event.name}</strong><br>
                             Venue: ${event.venue}<br>
                             Time: ${formatTime(event.start)} - ${formatTime(event.end)}<br>
                             Location: ${event.location}`;
        eventBlock.appendChild(tooltip);

        gridWrapper.appendChild(eventBlock);
    });

    timetableDisplay.appendChild(gridWrapper);
}

// Helper function to format time (e.g., 18.50 to 18:30)
function formatTime(time) {
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// Function to update active button styles
function updateButtonStates() {
    // Reset all day buttons
    [btnFri, btnSat, btnSun, btnJul15, btnJul16, btnJul17].forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-300', 'text-gray-800');
        btn.classList.remove('focus:ring-blue-300');
        btn.classList.add('focus:ring-gray-400');
    });
    // Set active day button
    document.getElementById(`btn-${currentDay}`).classList.remove('bg-gray-300', 'text-gray-800');
    document.getElementById(`btn-${currentDay}`).classList.add('bg-blue-600', 'text-white');
    document.getElementById(`btn-${currentDay}`).classList.remove('focus:ring-gray-400');
    document.getElementById(`btn-${currentDay}`).classList.add('focus:ring-blue-300');

    // Reset all location buttons
    [btnHk, btnMacau].forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-300', 'text-gray-800');
        btn.classList.remove('focus:ring-blue-300');
        btn.classList.add('focus:ring-gray-400');
    });
    // Set active location button
    document.getElementById(`btn-${currentLocation}`).classList.remove('bg-gray-300', 'text-gray-800');
    document.getElementById(`btn-${currentLocation}`).classList.add('bg-blue-600', 'text-white');
    document.getElementById(`btn-${currentLocation}`).classList.remove('focus:ring-gray-400');
    document.getElementById(`btn-${currentLocation}`).classList.add('focus:ring-blue-300');
}

// Event listeners for day selection
btnFri.addEventListener('click', () => { currentDay = 'fri'; updateTimetable(); });
btnSat.addEventListener('click', () => { currentDay = 'sat'; updateTimetable(); });
btnSun.addEventListener('click', () => { currentDay = 'sun'; updateTimetable(); });
btnJul15.addEventListener('click', () => { currentDay = 'jul15'; updateTimetable(); });
btnJul16.addEventListener('click', () => { currentDay = 'jul16'; updateTimetable(); });
btnJul17.addEventListener('click', () => { currentDay = 'jul17'; updateTimetable(); });

// Event listeners for location selection
btnHk.addEventListener('click', () => { currentLocation = 'hong-kong'; updateTimetable(); });
btnMacau.addEventListener('click', () => { currentLocation = 'macau'; updateTimetable(); });

// Function to orchestrate updates
function updateTimetable() {
    renderTimetable();
    updateButtonStates();
}

// Initial render when the page loads
document.addEventListener('DOMContentLoaded', updateTimetable);
