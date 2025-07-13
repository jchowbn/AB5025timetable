document.addEventListener('DOMContentLoaded', () => {
    // Initial data from ICS file for all events
    // This will be replaced if an ICS URL is loaded
    let events = {
        'Jul 11': [
            { location: 'Socio', name: 'Augustin Da Sambagio (Potato Head – Bali)', start: 18, end: 20, type: 'hong-kong' },
            { location: 'The Macallan House', name: 'Jigger & Pony (Singapore)', start: 18.5, end: 21.5, type: 'hong-kong' },
            { location: 'Lakeview Palace', name: 'Lakeview Palace x Yong Fu x Tell Camellia Tea-Tales', start: 19, end: 21, type: 'macau' },
            { location: 'Coa', name: 'Julio Bermejo & Dre Masso', start: 19, end: 22, type: 'hong-kong' },
            { location: 'Wynn Palace Mizumi', name: 'Elliot Faber Takes Over Mizumi', start: 19, end: 23, type: 'macau' },
            { location: 'Lobster Bar', name: 'Atlas (Singapore)', start: 19, end: 23, type: 'hong-kong' },
            { location: 'Wing Lei Bar', name: 'Nepal\'s Finest: Barc | Tell Camellia | Courtroom', start: 20, end: 23, type: 'macau' },
            { location: 'SW Steakhouse', name: 'Keegan McGregor\'s World Class Takeover', start: 20, end: 23, type: 'macau' },
            { location: 'Avoca', name: 'Amanda Wan (Three X Co – Kuala Lumpur)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Green Room', name: 'Bar Us (Bangkok)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'The Gallery Bar Macao', name: 'Weiqin Li (Bathe Coffee)', start: 21, end: 24, type: 'macau' }
        ],
        'Jul 12': [
            { location: 'Avoca', name: '8 Hands Industry Cocktails', start: 15, end: 17, type: 'hong-kong' },
            { location: 'Bourke\'s', name: 'Panjak Balachandran & Macleigh Rey Fernandes (Boilermaker – Goa)', start: 17, end: 19, type: 'hong-kong' },
            { location: 'Chef Tam\'s Seasons', name: 'Chef Tam\'s Seasons x Bar Mood', start: 18, end: 20, type: 'macau' },
            { location: 'The Old Man', name: 'Epic (Shanghai)', start: 18, end: 20, type: 'hong-kong' },
            { location: 'The Macallan House', name: 'Atlas (Singapore)', start: 18.5, end: 21.5, type: 'hong-kong' },
            { location: 'Drunken Fish', name: 'Drunken Fish x Maybe Sammy (50 Best Signature Sessions)', start: 19, end: 21, type: 'macau' },
            { location: 'Wing Lei Bar', name: 'Wing Lei Bar Showcase: Mark Lloyd', start: 19, end: 21, type: 'macau' },
            { location: 'Ozone', name: 'Marco Dongi (Bar Sathorn – Bangkok)', start: 19, end: 21, type: 'hong-kong' },
            { location: 'Lobster Bar', name: 'Jigger & Pony (Singapore)', start: 19, end: 23, type: 'hong-kong' },
            { location: 'Avoca', name: 'Sober Company (Shanghai)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Barcode', name: 'Hideaway Bar (Goa)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Ritz Carlton Bar and Lounge Macau', name: 'Shingo Sasaki (Sober Company – Shanghai)', start: 20, end: 23, type: 'macau' },
            { location: '25:00', name: 'Shin Lee & Ribo Lee (Bar Geranium – Seoul)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'The Wise King', name: 'Santo Metodo (Zuma – Bangkok)', start: 20, end: 24, type: 'hong-kong' },
            { location: 'Bar Buonasera', name: 'Dave Lam (The Dolomite – Shenzhen)', start: 20.5, end: 23.5, type: 'hong-kong' },
            { location: 'Foxglove', name: 'Pera Srisuk (The Fool Speakeasy – Phuket)', start: 20.5, end: 23.5, type: 'hong-kong' },
            { location: 'Roucou', name: 'Orsu Loviconi & Awaraa Awarzed', start: 21, end: 23, type: 'hong-kong' },
            { location: 'Wing Lei Bar', name: 'Julio Bermejo & Sam Ross', start: 21, end: 23.5, type: 'macau' },
            { location: 'The Gallery Bar Macao', name: 'Paul Zhang', start: 21, end: 24, type: 'macau' },
            { location: 'Palace Reserve Club', name: 'Bar Pop-up: Teresa Cocktail Bar x ZLB23', start: 22, end: 26, type: 'macau' },
            { location: 'The Aubrey', name: 'Happy Accidents, PS40, Artesian Bar, Manhattan Bar', start: 22.5, end: 26, type: 'hong-kong' }
        ],
        'Jul 13': [
            { location: 'Wynn Palace Mizumi', name: 'Sushi Mizumi x Martiny\'s (50 Best Signature Sessions)', start: 12, end: 14, type: 'macau' },
            { location: 'The Opposites', name: 'Atlas (Singapore) & Cosmo Pony (Jakarta)', start: 16, end: 19, type: 'hong-kong' },
            { location: 'Honky Tonks', name: 'Maria Escobia & YS Lai (Penrose - Kuala Lumpur)', start: 17, end: 18.5, type: 'hong-kong' },
            { location: 'Lala', name: 'Massimo Petovello (Mizunara - Hong Kong)', start: 17, end: 19, type: 'hong-kong' },
            { location: 'Bourke\'s', name: 'Tina Liu (Swirl - Shanghai)', start: 17, end: 20, type: 'hong-kong' },
            { location: 'Qura Bar', name: 'Savor the Art of Crafted Mixology with Award-Winning Bartenders', start: 17, end: 21, type: 'hong-kong' },
            { location: 'The Old Man', name: 'Obsidian Bar (Shenzhen)', start: 18, end: 20, type: 'hong-kong' },
            { location: 'Sam Fancy', name: 'Junghoo Kim (MO Bar - Singapore)', start: 18, end: 23, type: 'hong-kong' },
            { location: 'Honky Tonks', name: 'Arai Kazuhisa (Sober Company - Shanghai)', start: 18.5, end: 20, type: 'hong-kong' },
            { location: 'Terrible Baby', name: 'Little Red Door (Paris)', start: 19, end: 21, type: 'hong-kong' },
            { location: 'The Daily Tot', name: 'Jon Lee (Lavantha - Kuala Lumpur)', start: 19, end: 22, type: 'hong-kong' },
            { location: 'Woobar', name: 'Giselle Lee & Jez Carreon (Employees Only - Singapore)', start: 19, end: 22, type: 'hong-kong' },
            { location: 'St. Regis Bar', name: 'Zest Seoul', start: 19, end: 24, type: 'hong-kong' },
            { location: 'Honky Tonks', name: 'Chanel Adams (Bamboo Bar) & Emma Thompson (Tropic City) [Bangkok]', start: 20, end: 22, type: 'hong-kong' },
            { location: 'Cardinal Point', name: 'CMYK (Changsha) | Bar Blanc (Shanghai) | Pony Up (Shanghai)', start: 20, end: 22, type: 'hong-kong' },
            { location: 'Avoca', name: 'Analogue Initiative (Singapore)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'The Poet', name: 'Book Ing Bar (Taipei)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Alibi', name: 'Sufian Mahmoud & Gedalya Rianto (Artesian Bar - Jakarta)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Darkside', name: 'Vesper (Bangkok) | Reka (Kuala Lumpur)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Barcode', name: 'Hats Bar (Jakarta)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Quinary', name: 'Singapore Takeover: Gavin (Moga) | Mel & Khai (Bar Somma)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Dead Poets', name: 'Opium - Bangkok', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Bar Oasis', name: 'Amber & Cloris (The Public House - Taipei)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'The Polo Club', name: 'Leo Seo & Kai Choi (Jangseang Healthy Bar - Seoul)', start: 21, end: 23, type: 'hong-kong' },
            { location: 'Wing Lei Bar', name: 'Rainbow Takeover: Mostly Harmless | Artifact', start: 15, end: 18, type: 'macau' },
            { location: 'Palace Reserve Club', name: 'Honky Tonks Tavern | Potato Head Beach Club', start: 15, end: 18, type: 'macau' },
            { location: 'Wing Lei Bar', name: 'Laowai', start: 23, end: 25, type: 'macau' },
            { location: 'Wing Lei Bar', name: 'Bar Sathorn x OPM', start: 23.5, end: 25.5, type: 'macau' },
            { location: 'Ritz Carlton Bar and Lounge Macau', name: 'Shingo Sasaki (Sober Company – Shanghai) & Andy Chu (One or Two Bar – Melbourne)', start: 20.5, end: 23.5, type: 'macau' },
            { location: 'Wynn Palace Mizumi', name: 'Iichiko Takeover: Holly Graham & Beckaly Franks', start: 22, end: 26, type: 'macau' }
        ],
        'Jul 14': [
            { location: 'LPM', name: 'Reoma Mita (SG Club - Tokyo) | Bastien Ciocca (Bar San You - Shenzhen)', start: 15, end: 17, type: 'hong-kong' },
            { location: 'Lockdown', name: 'Writer\'s Bar (Singapore)', start: 18, end: 20, type: 'hong-kong' },
            { location: 'Penicillin', name: 'Modern Haus (Jakarta)', start: 18, end: 20, type: 'hong-kong' },
            { location: 'Zuma', name: 'The Odd Couple (Shanghai) | G.O.D. (Bangkok)', start: 18, end: 22, type: 'hong-kong' },
            { location: 'Kinsman', name: 'Kansai Takeover: Lamp Bar', start: 19, end: 21, type: 'hong-kong' },
            { location: 'C108', name: 'Andy Yoon & Ryan Kim (Bar Tea Scent - Seoul)', start: 19, end: 21, type: 'hong-kong' },
            { location: 'Ella', name: 'Baia - Singapore', start: 19, end: 22, type: 'hong-kong' },
            { location: 'Woobar', name: 'Toru Ariyoshi and Hiro Yamada (The Bee\'s Knees - Kyoto)', start: 19, end: 22, type: 'hong-kong' },
            { location: 'Lockdown', name: 'Phoenix Gastro Bar & H bar (Jakarta)', start: 20, end: 22, type: 'hong-kong' },
            { location: '25:00', name: 'Hiroyasu Ogura (The Hisaka - Tokyo)', start: 20, end: 23, type: 'hong-kong' },
            { location: '001', name: 'Semin Bae (Bar Jeong-On - Seoul', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Dead Poets', name: 'Paal - Shanghai', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Quinary', name: 'Vietnam Takeover: Leo (Stir) & Jimmy (Raw+Atelier)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Bar Mind', name: 'Pedison Kao (Bar Without - Taipei) & Tonic Liu (Maltail - Kaohsiung)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Thirsty Shaker', name: 'Kavish (The Bar at 15 Stamford - Singapore)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Skye Rooftop', name: 'Giovanni Graziadei & Wong Wee Siong (Edition - Singapore)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Bar Butler', name: 'Shinya Koba (Yakoboku - Kumamoto)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Darkside', name: 'Bar Les Ambassadeurs & The Cambridge Public House (Paris)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'AOAO', name: 'Plume (Singapore)', start: 20, end: 24, type: 'hong-kong' },
            { location: 'Kinsman', name: 'Kansai Takeover: Bee\'s Knees', start: 21, end: 23, type: 'hong-kong' },
            { location: 'The Polo Club', name: 'Sophia Kang (Four Seasons - Singapore)', start: 21, end: 23, type: 'hong-kong' },
            { location: 'Apothecary', name: 'Austin Chien & Joie Lin (Under Lab - Taipei)', start: 21, end: 23, type: 'hong-kong' },
            { location: 'Mizunara The Library', name: 'Punch Room Tokyo - Edition Ginza Japan', start: 21, end: 23.5, type: 'hong-kong' },
            { location: 'The Diplomat', name: 'Bae\'s Cocktail Club (Singapore)', start: 22, end: 25, type: 'hong-kong' },
            { location: 'Argo', name: 'Cat Bite Club (Singapore) | The Cocktail Club (Jakarta)', start: 23, end: 26, type: 'hong-kong' }
        ],
        'Jul 15': [
            { location: 'Chef Tam\'s Seasons', name: 'Chef Tam\'s Seasons x Masque x Sidecar', start: 13, end: 15, type: 'macau' },
            { location: 'Wynn Palace', name: 'Asia\'s 50 Best Bars', start: 18, end: 22, type: 'macau' },
            { location: 'Long Bar, Galaxy Hotel', name: 'Bar Cham x Alice x Le Chamber x Pine & Co', start: 20.5, end: 24.5, type: 'macau' },
            { location: 'Mesa Bar', name: 'Taln & Aum (Bar Us – Bangkok)', start: 22, end: 25, type: 'macau' },
            { location: 'St. Regis Bar Macau', name: 'Cat Bite Club (Singapore) | Reka (Kuala Lumpur)', start: 22, end: 24, type: 'macau' },
            { location: 'Palace Reserve Club', name: 'Official After Party: Freni e Frizioni | Vender | Bar Myung | Dead Poets', start: 22, end: 26, type: 'macau' },
            { location: 'Mesa Bar', name: 'Nicola Lazzari & Giuseppe Destefano (1920 – Dubai)', start: 22, end: 26, type: 'macau' },
            { location: 'Moon on Planet', name: 'Torres Brandy After Party by Hope & Sesame, Two Moons, & Night Hawk', start: 23, end: 27.5, type: 'macau' },
            { location: 'The Diplomat', name: 'Bae’s Cocktail Club (Singapore)', start: 22, end: 25, type: 'hong-kong' },
            { location: 'Argo', name: 'Cat Bite Club (Singapore) | The Cocktail Club (Jakarta)', start: 23, end: 25, type: 'hong-kong' }
        ],
        'Jul 16': [
            { location: 'St. Regis Bar Macau', name: 'Soko (Seoul) | Vesper (Bangkok)', start: 0, end: 2, type: 'macau' },
            { location: 'Wing Lei Bar', name: 'Wing Lei Bar Showcase: Mark Lloyd', start: 15, end: 17, type: 'macau' },
            { location: 'Bar Leone', name: 'Locale Firenze (Florence) | Moebius (Milan)', start: 16, end: 19, type: 'hong-kong' },
            { location: 'Penicillin', name: 'Three Cents Guest Shift', start: 18, end: 20, type: 'hong-kong' },
            { location: 'The Old Man', name: 'Soko & One (Bar Soko - Seoul)', start: 18, end: 21, type: 'hong-kong' },
            { location: 'Bar De Luxe', name: 'Wayne 安威 (Bar Hide - Taoyuan)', start: 19, end: 23, type: 'hong-kong' },
            { location: 'Paragon', name: 'Ale May (Iron Balls - Bangkok)', start: 19, end: 23, type: 'hong-kong' },
            { location: 'Soho House', name: 'Terry, Mason, Halim, and Eggsy (Alice Cheongdam - Seoul)', start: 19, end: 23, type: 'hong-kong' },
            { location: 'The Opposites', name: 'Seven Yi (Room by Le Kief - Taipei) & Hiroyasu Kayama (Bar Benfiddich - Tokyo)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Kinsman', name: 'Jerrold Khoo & Cyrus Wang (Stay Gold - Singapore)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Zzura', name: '"Boom" Komsupat Sirijutalak & "Great" Putimon Sutiwech (Thaipioka - Bangkok)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Terrible Baby', name: 'Artesian Bar (London)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Gokan', name: 'Handshake Speakeasy (CDMX)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Tell Camellia', name: 'Backdoor Bodega (Penang)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Barcode', name: 'Bar Bud (Shanghai)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Dead Poets', name: 'Rabbit Hole - Bangkok', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Orchard', name: 'Roy & Jude (Pomme Bar - Seoul)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'The Green Door', name: 'Shaken & Sung', start: 20, end: 23, type: 'hong-kong' },
            { location: 'The Old Man', name: 'Erika & Gabriel (Cat Bite Club - Singapore)', start: 21, end: 23.5, type: 'hong-kong' },
            { location: 'Uncle Ming’s', name: 'Kei Takahashi & Michito Kaneko (Lamp Bar - Nara)', start: 21, end: 24, type: 'hong-kong' }
        ],
        'Jul 17': [
            { location: 'Taqueria Super Macho', name: 'Three Cents Master Class', start: 14, end: 15, type: 'hong-kong' },
            { location: 'Lobster Bar', name: 'Malt + Mixology Space (Seoul)', start: 18, end: 20, type: 'hong-kong' },
            { location: 'Not 2 Sweet', name: 'Austen (Blotto)', start: 19, end: 23, type: 'hong-kong' },
            { location: 'Lobster Bar', name: 'Bar Cham (Seoul)', start: 20, end: 22, type: 'hong-kong' },
            { location: 'The Pontiac', name: 'May (Iron Balls The Parlour - Bangkok)', start: 20, end: 23, type: 'hong-kong' },
            { location: 'Vibes', name: 'Darren Lim (Vender Bar - Taichung)', start: 21, end: 24, type: 'hong-kong' },
            { location: 'Lobster Bar', name: 'Le Chamber (Seoul)', start: 22, end: 24, type: 'hong-kong' }
        ]
    };

    let currentDay = 'Jul 11'; // Default to Friday
    let currentLocation = 'Hong Kong'; // Default to Hong Kong

    const timetableDisplay = document.getElementById('timetable-display');

    // Function to parse ICS data (simplified)
    const parseICS = (icsContent) => {
        const lines = icsContent.split('\n');
        const parsedEvents = [];
        let currentEvent = {};

        lines.forEach(line => {
            line = line.trim();
            if (line.startsWith('BEGIN:VEVENT')) {
                currentEvent = {};
            } else if (line.startsWith('END:VEVENT')) {
                if (currentEvent.SUMMARY && currentEvent.DTSTART && currentEvent.DTEND && currentEvent.LOCATION) {
                    const startDate = new Date(currentEvent.DTSTART.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z?/, '$1-$2-$3T$4:$5:$6Z'));
                    const endDate = new Date(currentEvent.DTEND.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z?/, '$1-$2-$3T$4:$5:$6Z'));

                    // Check if the event is within the desired range (July 11 to July 17, 2025)
                    const eventDate = startDate.getDate();
                    const eventMonth = startDate.getMonth(); // 0-indexed
                    const eventYear = startDate.getFullYear();

                    if (eventYear === 2025 && eventMonth === 6 && eventDate >= 11 && eventDate <= 17) { // Month 6 is July
                        const dayKey = `Jul ${eventDate}`;
                        const startTime = startDate.getHours() + startDate.getMinutes() / 60;
                        const endTime = endDate.getHours() + endDate.getMinutes() / 60;
                        const locationLower = currentEvent.LOCATION.toLowerCase();
                        const type = locationLower.includes('macau') ? 'macau' : 'hong-kong';

                        parsedEvents.push({
                            date: dayKey,
                            location: currentEvent.LOCATION.split('\\,')[0].trim(), // Take first part before comma
                            name: currentEvent.SUMMARY,
                            start: startTime,
                            end: endTime,
                            type: type,
                            fullLocation: currentEvent.LOCATION // Store full location for tooltip
                        });
                    }
                }
            } else if (line.includes(':')) {
                const parts = line.split(':');
                const key = parts[0].split(';')[0]; // Handle properties with parameters like DTSTART;TZID
                const value = parts.slice(1).join(':');
                currentEvent[key] = value;
            }
        });
        return parsedEvents;
    };


    // Function to update the events data from parsed ICS data
    const updateEventsFromICS = (icsEvents) => {
        // Clear existing events for the relevant dates
        for (let i = 11; i <= 17; i++) {
            events[`Jul ${i}`] = [];
        }

        icsEvents.forEach(event => {
            if (!events[event.date]) {
                events[event.date] = [];
            }
            events[event.date].push(event);
        });

        // Ensure events are sorted by start time
        for (const day in events) {
            events[day].sort((a, b) => a.start - b.start);
        }
        updateTimetable();
    };

    // // Event listener for the ICS Load button
    // const loadIcsBtn = document.getElementById('load-ics-btn');
    // const icsUrlInput = document.getElementById('ics-url-input');
    // const icsMessage = document.getElementById('ics-message');

    // loadIcsBtn.addEventListener('click', async () => {
    //     const icsUrl = icsUrlInput.value.trim();
    //     if (icsUrl) {
    //         icsMessage.textContent = 'Loading ICS data...';
    //         icsMessage.className = 'text-sm text-blue-600 mt-2';
    //         try {
    //             // Simple CORS proxy if direct fetch fails due to CORS
    //             const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(icsUrl)}`;
    //             const response = await fetch(proxyUrl);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             const icsContent = await response.text();
    //             const newEvents = parseICS(icsContent);
    //             updateEventsFromICS(newEvents);
    //             icsMessage.textContent = 'ICS data loaded successfully!';
    //             icsMessage.className = 'text-sm text-green-600 mt-2';
    //         } catch (error) {
    //             console.error('Error loading ICS:', error);
    //             icsMessage.textContent = `Failed to load ICS data: ${error.message}. Check URL and CORS policy.`;
    //             icsMessage.className = 'text-sm text-red-600 mt-2';
    //         }
    //     } else {
    //         icsMessage.textContent = 'Please enter an ICS URL.';
    //         icsMessage.className = 'text-sm text-red-600 mt-2';
    //     }
    // });


    const renderTimetable = () => {
        const eventsForDay = events[currentDay] || [];
        const filteredEvents = eventsForDay.filter(event => {
            if (currentLocation === 'Hong Kong' && event.type === 'hong-kong') return true;
            if (currentLocation === 'Macau' && event.type === 'macau') return true;
            return false;
        });

        timetableDisplay.innerHTML = ''; // Clear previous timetable

        if (filteredEvents.length === 0) {
            timetableDisplay.innerHTML = `<p class="text-gray-600 text-center py-8">No events listed for ${currentDay} in ${currentLocation}.</p>`;
            return;
        }

        const startHour = 12; // 12 PM (noon)
        const endHour = 26; // 2 AM (next day)
        const totalHours = endHour - startHour;

        const gridWrapper = document.createElement('div');
        gridWrapper.classList.add('grid-wrapper');
        gridWrapper.style.setProperty('--num-hours', totalHours);

        // Add time labels
        const timeLabelsDiv = document.createElement('div');
        timeLabelsDiv.classList.add('time-labels');
        for (let i = startHour; i <= endHour; i++) {
            const timeLabel = document.createElement('div');
            timeLabel.classList.add('time-label');
            const displayHour = i > 24 ? i - 24 : i; // Handle 24 as 0 (midnight) or 25/26 as 1/2 AM
            const ampm = i < 24 ? (i < 12 ? 'AM' : 'PM') : 'AM'; // Adjust AM/PM for hours past midnight
            const actualDisplayHour = displayHour > 12 ? displayHour - 12 : (displayHour === 0 ? 12 : displayHour);
            timeLabel.textContent = `${actualDisplayHour}:00${ampm}`;
            timeLabelsDiv.appendChild(timeLabel);
        }
        gridWrapper.appendChild(timeLabelsDiv);

        // Add event blocks
        filteredEvents.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event-block', event.type);

            const startGridColumn = (event.start - startHour) + 1;
            const endGridColumn = (event.end - startHour) + 1;
            eventDiv.style.gridColumnStart = startGridColumn;
            eventDiv.style.gridColumnEnd = endGridColumn;

            // Display only the event name in the bubble
            eventDiv.innerHTML = event.name;

            // Tooltip
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = `
                <p class="font-bold">${event.name}</p>
                <p>Venue: ${event.fullLocation || event.location}</p>
                <p>Time: ${formatTime(event.start)} - ${formatTime(event.end)}</p>
            `;
            eventDiv.appendChild(tooltip);

            gridWrapper.appendChild(eventDiv);
        });

        timetableDisplay.appendChild(gridWrapper);
    };

    const formatTime = (time) => {
        const hours = Math.floor(time);
        const minutes = (time - hours) * 60;
        const ampm = hours < 24 ? (hours < 12 ? 'AM' : 'PM') : 'AM'; // Handle hours past midnight
        const displayHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours); // Convert to 12-hour format
        return `${displayHours}:${minutes.toString().padStart(2, '0')}${ampm}`;
    };


    const updateTimetable = () => {
        // Update button active states
        document.querySelectorAll('button[id^="btn-"]').forEach(button => {
            button.classList.remove('bg-blue-600', 'text-white');
            button.classList.add('bg-gray-300', 'text-gray-800');
        });

        document.getElementById(`btn-${currentDay.replace(' ', '').toLowerCase()}`).classList.remove('bg-gray-300', 'text-gray-800');
        document.getElementById(`btn-${currentDay.replace(' ', '').toLowerCase()}`).classList.add('bg-blue-600', 'text-white');

        document.getElementById(`btn-${currentLocation.toLowerCase()}`).classList.remove('bg-gray-300', 'text-gray-800');
        document.getElementById(`btn-${currentLocation.toLowerCase()}`).classList.add('bg-blue-600', 'text-white');

        renderTimetable();
    };

    // Event listeners for day buttons
    document.getElementById('btn-fri').addEventListener('click', () => { currentDay = 'Jul 11'; updateTimetable(); });
    document.getElementById('btn-sat').addEventListener('click', () => { currentDay = 'Jul 12'; updateTimetable(); });
    document.getElementById('btn-sun').addEventListener('click', () => { currentDay = 'Jul 13'; updateTimetable(); });
    document.getElementById('btn-jul15').addEventListener('click', () => { currentDay = 'Jul 15'; updateTimetable(); });
    document.getElementById('btn-jul16').addEventListener('click', () => { currentDay = 'Jul 16'; updateTimetable(); });
    document.getElementById('btn-jul17').addEventListener('click', () => { currentDay = 'Jul 17'; updateTimetable(); });

    // Event listeners for location buttons
    document.getElementById('btn-hk').addEventListener('click', () => { currentLocation = 'Hong Kong'; updateTimetable(); });
    document.getElementById('btn-macau').addEventListener('click', () => { currentLocation = 'Macau'; updateTimetable(); });

    // Initial render
    updateTimetable();
});
