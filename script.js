document.addEventListener('DOMContentLoaded', () => {
    const events = {
        'jul11': [
            { name: 'Augustin Da Sambagio (Potato Head – Bali)', venue: 'Socio', timeStart: '18:00', timeEnd: '20:00', location: 'Hong Kong' },
            { name: 'Jigger & Pony (Singapore)', venue: 'The Macallan House', timeStart: '18:30', timeEnd: '21:30', location: 'Hong Kong' },
            { name: 'Lakeview Palace x Yong Fu x Tell Camellia Tea-Tales', venue: 'Lakeview Palace', timeStart: '19:00', timeEnd: '21:00', location: 'Macau' },
            { name: 'Julio Bermejo & Dre Masso', venue: 'Coa', timeStart: '19:00', timeEnd: '22:00', location: 'Hong Kong' },
            { name: 'Elliot Faber Takes Over Mizumi', venue: 'Wynn Palace Mizumi', timeStart: '19:00', timeEnd: '23:00', location: 'Macau' },
            { name: 'Atlas (Singapore)', venue: 'Lobster Bar', timeStart: '19:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: "Nepal's Finest: Barc | Tell Camellia | Courtroom", venue: 'Wing Lei Bar', timeStart: '20:00', timeEnd: '23:00', location: 'Macau' },
            { name: "Keegan McGregor's World Class Takeover", venue: 'SW Steakhouse', timeStart: '20:00', timeEnd: '23:00', location: 'Macau' },
            { name: 'Amanda Wan (Three X Co – Kuala Lumpur)', venue: 'Avoca', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Bar Us (Bangkok)', venue: 'Green Room', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Weiqin Li (Bathe Coffee)', venue: 'The Gallery Bar Macao', timeStart: '21:00', timeEnd: '00:00', location: 'Macau' }
        ],
        'jul12': [
            { name: '8 Hands Industry Cocktails', venue: 'Avoca', timeStart: '15:00', timeEnd: '17:00', location: 'Hong Kong' },
            { name: 'Panjak Balachandran & Macleigh Rey Fernandes (Boilermaker – Goa)', venue: 'Bourke\'s', timeStart: '17:00', timeEnd: '19:00', location: 'Macau' },
            { name: 'Chef Tam\'s Seasons x Bar Mood', venue: 'Chef Tam\'s Seasons', timeStart: '18:00', timeEnd: '20:00', location: 'Macau' },
            { name: 'Epic (Shanghai)', venue: 'The Old Man', timeStart: '18:00', timeEnd: '20:00', location: 'Hong Kong' },
            { name: 'Atlas (Singapore)', venue: 'The Macallan House', timeStart: '18:30', timeEnd: '21:30', location: 'Hong Kong' },
            { name: 'Drunken Fish x Maybe Sammy (50 Best Signature Sessions)', venue: 'Drunken Fish', timeStart: '19:00', timeEnd: '21:00', location: 'Macau' },
            { name: 'Wing Lei Bar Showcase: Mark Lloyd', venue: 'Wing Lei Bar', timeStart: '19:00', timeEnd: '21:00', location: 'Macau' },
            { name: 'Marco Dongi (Bar Sathorn – Bangkok)', venue: 'Ozone', timeStart: '19:00', timeEnd: '21:00', location: 'Hong Kong' },
            { name: 'Jigger & Pony (Singapore)', venue: 'Lobster Bar', timeStart: '19:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Sober Company (Shanghai)', venue: 'Avoca', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Hideaway Bar (Goa)', venue: 'Barcode', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Shingo Sasaki (Sober Company – Shanghai)', venue: 'Ritz Carlton Bar and Lounge Macau', timeStart: '20:00', timeEnd: '23:00', location: 'Macau' },
            { name: 'Shin Lee & Ribo Lee (Bar Geranium – Seoul)', venue: '25:00', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Santo Metodo (Zuma – Bangkok)', venue: 'The Wise King', timeStart: '20:00', timeEnd: '00:00', location: 'Hong Kong' },
            { name: 'Dave Lam (The Dolomite – Shenzhen)', venue: 'Bar Buonasera', timeStart: '20:30', timeEnd: '23:30', location: 'Hong Kong' },
            { name: 'Pera Srisuk (The Fool Speakeasy – Phuket)', venue: 'Foxglove', timeStart: '20:30', timeEnd: '23:30', location: 'Hong Kong' },
            { name: 'Orsu Loviconi & Awaraa Awarzed', venue: 'Roucou', timeStart: '21:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Julio Bermejo & Sam Ross', venue: 'Wing Lei Bar', timeStart: '21:00', timeEnd: '23:30', location: 'Macau' },
            { name: 'Paul Zhang', venue: 'The Gallery Bar Macao', timeStart: '21:00', timeEnd: '00:00', location: 'Macau' },
            { name: 'Bar Pop-up: Teresa Cocktail Bar x ZLB23', venue: 'Palace Reserve Club', timeStart: '22:00', timeEnd: '02:00', location: 'Macau' },
            { name: 'Happy Accidents, PS40, Artesian Bar, Manhattan Bar', venue: 'The Aubrey', timeStart: '22:30', timeEnd: '02:00', location: 'Hong Kong' }
        ],
        'jul13': [
            { name: 'Sushi Mizumi x Martiny\'s (50 Best Signature Sessions)', venue: 'Wynn Palace Mizumi', timeStart: '12:00', timeEnd: '14:00', location: 'Macau' },
            { name: 'Rainbow Takeover: Mostly Harmless | Artifact', venue: 'Wing Lei Bar', timeStart: '15:00', timeEnd: '18:00', location: 'Macau' },
            { name: 'Honky Tonks Tavern | Potato Head Beach Club', venue: 'Palace Reserve Club', timeStart: '15:00', timeEnd: '18:00', location: 'Macau' },
            { name: 'Atlas (Singapore) & Cosmo Pony (Jakarta)', venue: 'The Opposites', timeStart: '16:00', timeEnd: '19:00', location: 'Hong Kong' },
            // Newly added events for July 13 based on hkbarcal.com
            { name: 'Opium – Bangkok', venue: 'Dead Poets', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Shingo Sasaki (Sober Company – Shanghai) & Andy Chu (One or Two Bar – Melbourne)', venue: 'Ritz Carlton Bar and Lounge Macau', timeStart: '20:30', timeEnd: '23:30', location: 'Macau' },
            { name: 'Leo Seo & Kai Choi (Jangseang Healthy Bar – Seoul)', venue: 'The Polo Club', timeStart: '21:00', timeEnd: '00:00', location: 'Hong Kong' },
            { name: 'Iichiko Takeover: Holly Graham & Beckaly Franks', venue: 'Wynn Palace Mizumi', timeStart: '22:00', timeEnd: '02:00', location: 'Macau' },
            { name: 'Schofield\'s | Hey Palu | Kwant', venue: 'Palace Reserve Club Wynn Palace', timeStart: '23:00', timeEnd: '01:00', location: 'Macau' },
            { name: 'Laowai', venue: 'Wing Lei Bar Wynn Palace', timeStart: '23:30', timeEnd: '01:30', location: 'Macau' }
        ],
        'jul15': [
            { name: 'Bar Cham x Alice x Le Chamber x Pine & Co', venue: 'Long Bar, Galaxy Hotel', timeStart: '20:30', timeEnd: '00:30', location: 'Macau' },
            { name: 'Bae’s Cocktail Club (Singapore)', venue: 'The Diplomat', timeStart: '22:00', timeEnd: '01:00', location: 'Hong Kong' },
            { name: 'Taln & Aum (Bar Us – Bangkok)', venue: 'Mesa Bar, THE KARL LAGERFELD', timeStart: '22:00', timeEnd: '01:00', location: 'Macau' },
            { name: 'Cat Bite Club (Singapore) | The Cocktail Club (Jakarta)', venue: 'Argo', timeStart: '23:00', timeEnd: '01:00', location: 'Hong Kong' },
            { name: 'Chef Tam’s Seasons x Masque x Sidecar', venue: 'Chef Tam\'s Seasons, Wynn Palace', timeStart: '13:00', timeEnd: '15:00', location: 'Macau' },
            { name: 'Asia’s 50 Best Bars', venue: 'Wynn Palace', timeStart: '18:00', timeEnd: '22:00', location: 'Macau' },
            { name: 'Cat Bite Club (Singapore) | Reka (Kuala Lumpur)', venue: 'St. Regis Bar Macau', timeStart: '22:00', timeEnd: '00:00', location: 'Macau' },
            { name: 'Official After Party: Freni e Frizioni | Vender | Bar Myung | Dead Poets', venue: 'Palace Reserve Club, Wynn Palace', timeStart: '22:00', timeEnd: '02:00', location: 'Macau' },
            { name: 'Nicola Lazzari & Giuseppe Destefano (1920 – Dubai)', venue: 'Mesa Bar, THE KARL LAGERFELD', timeStart: '22:00', timeEnd: '02:00', location: 'Macau' },
            { name: 'Torres Brandy After Party by Hope & Sesame, Two Moons, & Night Hawk', venue: 'Moon on Planet, Studio City Macau', timeStart: '23:00', timeEnd: '03:30', location: 'Macau' }
        ],
        'jul16': [
            { name: 'Soko (Seoul) | Vesper (Bangkok)', venue: 'St. Regis Bar Macau', timeStart: '00:00', timeEnd: '02:00', location: 'Macau' },
            { name: 'Wing Lei Bar Showcase: Mark Lloyd', venue: 'Wing Lei Bar, Wynn Palace', timeStart: '15:00', timeEnd: '17:00', location: 'Macau' },
            { name: 'Locale Firenze (Florence) | Moebius (Milan)', venue: 'Bar Leone', timeStart: '16:00', timeEnd: '19:00', location: 'Hong Kong' },
            { name: 'Three Cents Guest Shift', venue: 'Penicillin', timeStart: '18:00', timeEnd: '20:00', location: 'Hong Kong' },
            { name: 'Soko & One (Bar Soko – Seoul)', venue: 'The Old Man', timeStart: '18:00', timeEnd: '21:00', location: 'Hong Kong' },
            { name: 'Wayne 安威 (Bar Hide – Taoyuan)', venue: 'Bar De Luxe', timeStart: '19:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Ale May (Iron Balls – Bangkok)', venue: 'Paragon', timeStart: '19:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Terry, Mason, Halim, and Eggsy (Alice Cheongdam – Seoul)', venue: 'Soho House', timeStart: '19:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Seven Yi (Room by Le Kief – Taipei) & Hiroyasu Kayama (Bar Benfiddich – Tokyo)', venue: 'The Opposites', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Jerrold Khoo & Cyrus Wang (Stay Gold – Singapore)', venue: 'Kinsman', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Handshake Speakeasy (CDMX)', venue: 'Gokan', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Backdoor Bodega (Penang)', venue: 'Tell Camellia', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Bar Bud (Shanghai)', venue: 'Barcode', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Rabbit Hole – Bangkok', venue: 'Dead Poets', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Roy & Jude (Pomme Bar – Seoul)', venue: 'Orchard', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Shaken & Sung', venue: 'The Green Door', timeStart: '20:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Erika & Gabriel (Cat Bite Club – Singapore)', venue: 'The Old Man', timeStart: '21:00', timeEnd: '23:30', location: 'Hong Kong' },
            { name: 'Kei Takahashi & Michito Kaneko (Lamp Bar – Nara)', venue: 'Uncle Ming\'s', timeStart: '21:00', timeEnd: '00:00', location: 'Hong Kong' },
            { name: 'Yong Wei (Native – Singapore)', venue: 'Bar Patua', timeStart: '21:00', timeEnd: '01:00', location: 'Macau' }
        ],
        'jul17': [
            { name: 'Three Cents Master Class', venue: 'Taqueria Super Macho', timeStart: '14:00', timeEnd: '15:00', location: 'Hong Kong' },
            { name: 'Malt + Mixology Space (Seoul)', venue: 'Lobster Bar', timeStart: '18:00', timeEnd: '20:00', location: 'Hong Kong' },
            { name: 'Austen (Blotto)', venue: 'Not 2 Sweet', timeStart: '19:00', timeEnd: '23:00', location: 'Hong Kong' },
            { name: 'Bar Cham (Seoul)', venue: 'Lobster Bar', timeStart: '20:00', timeEnd: '22:00', location: 'Hong Kong' },
            { name: 'Ngo Kim Uyen (Ne – Hanoi) | Lam Duc Anh (Stir – HCMC)', venue: 'Ritz Carlton Bar and Lounge Macau', timeStart: '20:00', timeEnd: '23:00', location: 'Macau' }
        ]
    };

    let currentDay = 'jul16'; // Default to July 16th as it's Wednesday today
    let currentLocation = 'Hong Kong'; // Default to Hong Kong events

    const getHour = (timeString) => parseInt(timeString.split(':')[0]);
    const getMinute = (timeString) => parseInt(timeString.split(':')[1]);

    const calculateTimeProperties = (event) => {
        const startHour = getHour(event.timeStart);
        const startMinute = getMinute(event.timeStart);
        let endHour = getHour(event.timeEnd);
        let endMinute = getMinute(event.timeEnd);

        // Handle events that cross midnight (e.g., 23:00 - 02:00)
        if (endHour < startHour) {
            endHour += 24; // Add 24 hours to the end time
        } else if (endHour === startHour && endMinute < startMinute) {
            endHour += 24; // Handle cases like 23:30 - 23:00 (end time is on next day)
        }

        const totalHours = endHour - startHour + (endMinute - startMinute) / 60;
        const startCol = (startHour * 60 + startMinute) / 60; // Start position in hours from 00:00
        const durationCols = totalHours;

        return { startCol, durationCols };
    };

    const renderTimetable = () => {
        const timetableContainer = document.getElementById('timetable-display');
        timetableContainer.innerHTML = ''; // Clear previous content

        const currentDayEvents = events[currentDay] || [];
        const filteredEvents = currentLocation === 'All'
            ? currentDayEvents
            : currentDayEvents.filter(event => event.location === currentLocation);

        if (filteredEvents.length === 0) {
            timetableContainer.innerHTML = `
                <div class="text-center text-gray-600 p-8">
                    No events listed for ${currentDay.replace('jul', 'July ')} in ${currentLocation}.
                </div>
            `;
            return;
        }

        // Determine the overall time range for the current day's events
        let minHour = 24; // Max possible start hour
        let maxHour = 0;  // Min possible end hour

        filteredEvents.forEach(event => {
            minHour = Math.min(minHour, getHour(event.timeStart));
            maxHour = Math.max(maxHour, getHour(event.timeEnd));
        });

        // Adjust min/max hours to cover a reasonable range, e.g., if events are 19:00-21:00, show 18:00-22:00
        minHour = Math.floor(minHour); // Ensure it's a whole hour
        maxHour = Math.ceil(maxHour);  // Ensure it's a whole hour

        // If range is too small, extend it
        if (maxHour - minHour < 4) { // Ensure at least 4 hours are displayed
            minHour = Math.max(0, minHour - 2);
            maxHour = Math.min(24, maxHour + 2);
        }

        // Handle events crossing midnight
        if (minHour > maxHour) {
            maxHour += 24; // Extend range to cover the next day
        }

        const numHours = maxHour - minHour;
        timetableContainer.style.setProperty('--start-hour', minHour);
        timetableContainer.style.setProperty('--num-hours', numHours);
        timetableContainer.style.setProperty('--num-events', filteredEvents.length);


        // Create the inner grid wrapper
        const gridWrapper = document.createElement('div');
        gridWrapper.className = 'grid-wrapper';
        timetableContainer.appendChild(gridWrapper);


        // Create time labels (header row)
        const timeLabelsRow = document.createElement('div');
        timeLabelsRow.className = 'time-labels';
        gridWrapper.appendChild(timeLabelsRow); // Append to gridWrapper

        for (let i = 0; i <= numHours; i++) {
            const hour = (minHour + i) % 24; // Handle 24-hour cycle for display
            const timeLabel = document.createElement('div');
            timeLabel.className = 'time-label';
            timeLabel.textContent = `${String(hour).padStart(2, '0')}:00`;
            timeLabelsRow.appendChild(timeLabel);
        }

        // Render events
        filteredEvents.forEach((event, index) => {
            const { startCol, durationCols } = calculateTimeProperties(event);

            const eventBlock = document.createElement('div');
            eventBlock.className = `event-block ${event.location.toLowerCase().replace(' ', '-')}`; // Add location class
            eventBlock.style.gridColumn = `${startCol - minHour + 1} / span ${durationCols}`;
            eventBlock.style.gridRow = `${index + 2}`; // +2 because row 1 is time labels

            eventBlock.innerHTML = `
                <span class="event-name">${event.name}</span>
                <div class="tooltip">
                    <strong>${event.name}</strong><br>
                    Venue: ${event.venue}<br>
                    Time: ${event.timeStart} - ${event.timeEnd}<br>
                    Location: ${event.location}
                </div>
            `;
            gridWrapper.appendChild(eventBlock); // Append to gridWrapper
        });
    };

    const updateActiveButtons = () => {
        // Reset all day buttons
        document.querySelectorAll('.w-full button').forEach(button => {
            button.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');
            button.classList.add('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
        });
        // Set active day button
        document.getElementById(`btn-${currentDay}`).classList.remove('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
        document.getElementById(`btn-${currentDay}`).classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');

        // Reset all location buttons
        document.querySelectorAll('.max-w-lg button').forEach(button => {
            button.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');
            button.classList.add('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
        });
        // Set active location button
        if (currentLocation === 'Hong Kong') {
            document.getElementById('btn-hk').classList.remove('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
            document.getElementById('btn-hk').classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');
        } else if (currentLocation === 'Macau') {
            document.getElementById('btn-macau').classList.remove('bg-gray-300', 'text-gray-800', 'hover:bg-gray-400', 'focus:ring-gray-400');
            document.getElementById('btn-macau').classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'focus:ring-blue-300');
        }
    };

    const updateTimetable = () => {
        renderTimetable();
        updateActiveButtons();
    };

    // Event listeners for day buttons
    document.getElementById('btn-fri').addEventListener('click', () => { currentDay = 'jul11'; updateTimetable(); });
    document.getElementById('btn-sat').addEventListener('click', () => { currentDay = 'jul12'; updateTimetable(); });
    document.getElementById('btn-sun').addEventListener('click', () => { currentDay = 'jul13'; updateTimetable(); });
    document.getElementById('btn-jul15').addEventListener('click', () => { currentDay = 'jul15'; updateTimetable(); });
    document.getElementById('btn-jul16').addEventListener('click', () => { currentDay = 'jul16'; updateTimetable(); });
    document.getElementById('btn-jul17').addEventListener('click', () => { currentDay = 'jul17'; updateTimetable(); });

    // Event listeners for location buttons
    document.getElementById('btn-hk').addEventListener('click', () => { currentLocation = 'Hong Kong'; updateTimetable(); });
    document.getElementById('btn-macau').addEventListener('click', () => { currentLocation = 'Macau'; updateTimetable(); });

    // Initial render
    updateTimetable();
});
