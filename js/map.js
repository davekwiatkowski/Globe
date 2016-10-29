var modes = ['users', 'user_delta', 'swl'];
var data, options;

google.charts.load('upcoming', {
    'packages': ['geochart']
});
google.charts.setOnLoadCallback(init);
window.onresize = drawRegionsMap;

function init() {
    changeData();
    drawRegionsMap();
    for (var i = 0; i < modes.length; i++) {
        var modeToChange = document.getElementById('mode_' + modes[i]);
        modeToChange.addEventListener('click', changeData, false);
    }
}

function changeData() {
    var data2 = google.visualization.arrayToDataTable([
        ["Country", "Country", "New Users"],
        ["AL", "Albania", 0.016],
        ["DZ", "Algeria", 0.043],
        ["AO", "Angola", 0.057],
        ["AG", "Antigua and Barbuda", 0.018],
        ["AR", "Argentina", 0.031],
        ["AM", "Armenia", 0.026],
        ["AU", "Australia", 0.017],
        ["AT", "Austria", 0.003],
        ["AZ", "Azerbaijan", 0.012],
        ["BH", "Bahrain", 0.017],
        ["BD", "Bangladesh", 0.104],
        ["BB", "Barbados", 0.017],
        ["BY", "Belarus", 0.009],
        ["BE", "Belgium", 0.019],
        ["BZ", "Belize", 0.067],
        ["BJ", "Benin", 0.045],
        ["BT", "Bhutan", 0.034],
        ["BO", "Bolivia", 0.031],
        ["BA", "Bosnia and Herzegovina", 0.002],
        ["BW", "Botswana", 0.062],
        ["BR", "Brazil", 0.051],
        ["BN", "Brunei", 0.029],
        ["BG", "Bulgaria", 0.009],
        ["BF", "Burkina Faso", 0.07],
        ["BI", "Burundi", 0.051],
        ["KH", "Cambodia", 0.079],
        ["CM", "Cameroon", 0.165],
        ["CA", "Canada", 0.018],
        ["CF", "Central African Republic", 0.053],
        ["TD", "Chad", 0.055],
        ["CL", "Chile", 0.033],
        ["CN", "China", 0.022],
        ["CO", "Colombia", 0.049],
        ["KM", "Comoros", 0.039],
        ["CR", "Costa Rica", 0.05],
        ["CI", "Cote d'Ivoire", 0.143],
        ["HR", "Croatia", 0.036],
        ["CU", "Cuba", 0.04],
        ["CY", "Cyprus", 0.02],
        ["CZ", "Czech Republic", 0.032],
        ["DK", "Denmark", 0.005],
        ["DJ", "Djibouti", 0.04],
        ["DM", "Dominica", 0.02],
        ["DO", "Dominican Republic", 0.025],
        ["EC", "Ecuador", 0.015],
        ["EG", "Egypt", 0.033],
        ["SV", "El Salvador", 0.078],
        ["GQ", "Equatorial Guinea", 0.061],
        ["ER", "Eritrea", 0.048],
        ["EE", "Estonia", 0.022],
        ["ET", "Ethiopia", 0.134],
        ["FJ", "Fiji", 0.04],
        ["FI", "Finland", 0.004],
        ["FR", "France", 0.014],
        ["GA", "Gabon", 0.039],
        ["GE", "Georgia", 0.019],
        ["DE", "Germany", 0.006],
        ["GH", "Ghana", 0.14],
        ["GR", "Greece", 0.004],
        ["GD", "Grenada", 0.016],
        ["GT", "Guatemala", 0.058],
        ["GN", "Guinea", 0.047],
        ["GW", "Guinea-Bissau", 0.041],
        ["GY", "Guyana", 0.022],
        ["HT", "Haiti", 0.03],
        ["HN", "Honduras", 0.05],
        ["HK", "Hong Kong", 0.006],
        ["HU", "Hungary", 0.012],
        ["IS", "Iceland", 0.009],
        ["IN", "India", 0.305],
        ["ID", "Indonesia", 0.065],
        ["IR", "Iran", 0.077],
        ["IE", "Ireland", 0.01],
        ["IL", "Israel", 0.021],
        ["IT", "Italy", 0.017],
        ["JM", "Jamaica", 0.025],
        ["JP", "Japan", 0.001],
        ["JO", "Jordan", 0.032],
        ["KZ", "Kazakhstan", 0.018],
        ["KE", "Kenya", 0.037],
        ["KW", "Kuwait", 0.034],
        ["KG", "Kyrgyzstan", 0.075],
        ["LA", "Laos", 0.047],
        ["LV", "Latvia", 0],
        ["LB", "Lebanon", 0.032],
        ["LS", "Lesotho", 0.181],
        ["LY", "Libya", 0.099],
        ["LT", "Lithuania", 0.011],
        ["LU", "Luxembourg", 0.019],
        ["MG", "Madagascar", 0.073],
        ["MW", "Malawi", 0.067],
        ["MY", "Malaysia", 0.022],
        ["MV", "Maldives", 0.043],
        ["ML", "Mali", 0.186],
        ["MT", "Malta", 0.028],
        ["MR", "Mauritania", 0.158],
        ["MU", "Mauritius", 0.011],
        ["MX", "Mexico", 0.021],
        ["MD", "Moldova", 0.007],
        ["MN", "Mongolia", 0.097],
        ["MA", "Morocco", 0.017],
        ["MZ", "Mozambique", 0.05],
        ["MM", "Myanmar", 0.061],
        ["NA", "Namibia", 0.038],
        ["NP", "Nepal", 0.045],
        ["NL", "Netherlands", 0.006],
        ["NZ", "New Zealand", 0.022],
        ["NI", "Nicaragua", 0.041],
        ["NE", "Niger", 0.067],
        ["NG", "Nigeria", 0.05],
        ["NO", "Norway", 0.017],
        ["OM", "Oman", 0.041],
        ["PK", "Pakistan", 0.097],
        ["PA", "Panama", 0.019],
        ["PG", "Papua New Guinea", 0.086],
        ["PY", "Paraguay", 0.039],
        ["PE", "Peru", 0.019],
        ["PH", "Philippines", 0.044],
        ["PL", "Poland", 0.025],
        ["PT", "Portugal", 0.008],
        ["QA", "Qatar", 0.028],
        ["RO", "Romania", 0.014],
        ["RU", "Russia", 0.003],
        ["RW", "Rwanda", 0.073],
        ["KN", "Saint Kitts and Nevis", 0.015],
        ["LC", "Saint Lucia", 0.05],
        ["WS", "Samoa", 0.097],
        ["ST", "Sao Tome and Principe", 0.036],
        ["SA", "Saudi Arabia", 0.028],
        ["SN", "Senegal", 0.114],
        ["SC", "Seychelles", 0.026],
        ["SL", "Sierra Leone", 0.066],
        ["SG", "Singapore", 0.02],
        ["SK", "Slovakia", 0.01],
        ["SI", "Slovenia", 0.004],
        ["SB", "Solomon Islands", 0.046],
        ["ZA", "South Africa", 0.039],
        ["ES", "Spain", 0.022],
        ["LK", "Sri Lanka", 0.042],
        ["SD", "Sudan", 0.045],
        ["SR", "Suriname", 0.025],
        ["SZ", "Swaziland", 0.022],
        ["SE", "Sweden", 0.01],
        ["CH", "Switzerland", 0.01],
        ["SY", "Syria", 0.02],
        ["TJ", "Tajikistan", 0.043],
        ["TZ", "Tanzania", 0.056],
        ["TH", "Thailand", 0.062],
        ["TG", "Togo", 0.1],
        ["TO", "Tonga", 0.053],
        ["TT", "Trinidad and Tobago", 0.034],
        ["TN", "Tunisia", 0.024],
        ["TR", "Turkey", 0.051],
        ["TM", "Turkmenistan", 0.064],
        ["GB", "U.K.", 0.009],
        ["US", "U.S.", 0.011],
        ["UG", "Uganda", 0.055],
        ["UA", "Ukraine", 0.004],
        ["AE", "United Arab Emirates", 0.017],
        ["UY", "Uruguay", 0.021],
        ["UZ", "Uzbekistan", 0.061],
        ["VU", "Vanuatu", 0.16],
        ["VE", "Venezuela", 0.021],
        ["VN", "Viet Nam", 0.033],
        ["YE", "Yemen", 0.052],
        ["ZM", "Zambia", 0.059],
        ["ZW", "Zimbabwe", 0.041]
    ]);

    var data3 = google.visualization.arrayToDataTable([
        ["Country", "Country", "Life Satisfaction"],
        ["AL", "Albania", 153.33],
        ["DZ", "Algeria", 173.33],
        ["AO", "Angola", 160],
        ["AG", "Antigua and Barbuda", 246.67],
        ["AR", "Argentina", 226.67],
        ["AM", "Armenia", 123.33],
        ["AU", "Australia", 243.33],
        ["AT", "Austria", 260],
        ["AZ", "Azerbaijan", 163.33],
        ["BH", "Bahrain", 240],
        ["BD", "Bangladesh", 190],
        ["BB", "Barbados", 243.33],
        ["BY", "Belarus", 133.33],
        ["BE", "Belgium", 243.33],
        ["BZ", "Belize", 230],
        ["BJ", "Benin", 180],
        ["BT", "Bhutan", 253.33],
        ["BO", "Bolivia", 183.33],
        ["BA", "Bosnia and Herzegovina", 170],
        ["BW", "Botswana", 180],
        ["BR", "Brazil", 210],
        ["BN", "Brunei", 253.33],
        ["BG", "Bulgaria", 143.33],
        ["BF", "Burkina Faso", 156.67],
        ["BI", "Burundi", 100],
        ["KH", "Cambodia", 186.67],
        ["CM", "Cameroon", 170],
        ["CA", "Canada", 253.33],
        ["CF", "Central African Republic", 163.33],
        ["TD", "Chad", 150],
        ["CL", "Chile", 216.67],
        ["CN", "China", 210],
        ["CO", "Colombia", 240],
        ["KM", "Comoros", 196.67],
        ["CR", "Costa Rica", 250],
        ["CI", "Cote d'Ivoire", 150],
        ["HR", "Croatia", 196.67],
        ["CU", "Cuba", 210],
        ["CY", "Cyprus", 230],
        ["CZ", "Czech Republic", 213.33],
        ["DK", "Denmark", 233.33],
        ["DJ", "Djibouti", 160],
        ["DM", "Dominica", 243.33],
        ["DO", "Dominican Republic", 233.33],
        ["EC", "Ecuador", 186.67],
        ["EG", "Egypt", 160],
        ["SV", "El Salvador", 220],
        ["GQ", "Equatorial Guinea", 173.33],
        ["ER", "Eritrea", 146.67],
        ["EE", "Estonia", 170],
        ["ET", "Ethiopia", 156.67],
        ["FJ", "Fiji", 223.33],
        ["FI", "Finland", 256.67],
        ["FR", "France", 220],
        ["GA", "Gabon", 206.67],
        ["GE", "Georgia", 136.67],
        ["DE", "Germany", 240],
        ["GH", "Ghana", 206.67],
        ["GR", "Greece", 210],
        ["GD", "Grenada", 216.67],
        ["GT", "Guatemala", 233.33],
        ["GN", "Guinea", 170],
        ["GW", "Guinea-Bissau", 180],
        ["GY", "Guyana", 240],
        ["HT", "Haiti", 183.33],
        ["HN", "Honduras", 240],
        ["HK", "Hong Kong", 220],
        ["HU", "Hungary", 190],
        ["IS", "Iceland", 260],
        ["IN", "India", 180],
        ["ID", "Indonesia", 220],
        ["IR", "Iran", 200],
        ["IE", "Ireland", 253.33],
        ["IL", "Israel", 223.33],
        ["IT", "Italy", 230],
        ["JM", "Jamaica", 273.33],
        ["JP", "Japan", 206.67],
        ["JO", "Jordan", 170],
        ["KZ", "Kazakhstan", 193.33],
        ["KE", "Kenya", 186.67],
        ["KW", "Kuwait", 240],
        ["KG", "Kyrgyzstan", 220],
        ["LA", "Laos", 180],
        ["LV", "Latvia", 156.67],
        ["LB", "Lebanon", 186.67],
        ["LS", "Lesotho", 143.33],
        ["LY", "Libya", 190],
        ["LT", "Lithuania", 156.67],
        ["LU", "Luxembourg", 253.33],
        ["MG", "Madagascar", 193.33],
        ["MW", "Malawi", 153.33],
        ["MY", "Malaysia", 246.67],
        ["MV", "Maldives", 220],
        ["ML", "Mali", 176.67],
        ["MT", "Malta", 250],
        ["MR", "Mauritania", 176.67],
        ["MU", "Mauritius", 216.67],
        ["MX", "Mexico", 230],
        ["MD", "Moldova", 116.67],
        ["MN", "Mongolia", 223.33],
        ["MA", "Morocco", 186.67],
        ["MZ", "Mozambique", 180],
        ["MM", "Myanmar", 176.67],
        ["NA", "Namibia", 216.67],
        ["NP", "Nepal", 183.33],
        ["NL", "Netherlands", 250],
        ["NZ", "New Zealand", 246.67],
        ["NI", "Nicaragua", 210],
        ["NE", "Niger", 150],
        ["NG", "Nigeria", 183.33],
        ["NO", "Norway", 246.67],
        ["OM", "Oman", 243.33],
        ["PK", "Pakistan", 143.33],
        ["PA", "Panama", 240],
        ["PG", "Papua New Guinea", 210],
        ["PY", "Paraguay", 216.67],
        ["PE", "Peru", 186.67],
        ["PH", "Philippines", 213.33],
        ["PL", "Poland", 196.67],
        ["PT", "Portugal", 203.33],
        ["QA", "Qatar", 233.33],
        ["RO", "Romania", 173.33],
        ["RU", "Russia", 143.33],
        ["RW", "Rwanda", 146.67],
        ["KN", "Saint Kitts and Nevis", 246.67],
        ["LC", "Saint Lucia", 233.33],
        ["WS", "Samoa", 230],
        ["ST", "Sao Tome and Principe", 223.33],
        ["SA", "Saudi Arabia", 243.33],
        ["SN", "Senegal", 186.67],
        ["SC", "Seychelles", 246.67],
        ["SL", "Sierra Leone", 166.67],
        ["SG", "Singapore", 230],
        ["SK", "Slovakia", 180],
        ["SI", "Slovenia", 220],
        ["SB", "Solomon Islands", 230],
        ["ZA", "South Africa", 190],
        ["ES", "Spain", 233.33],
        ["LK", "Sri Lanka", 203.33],
        ["SD", "Sudan", 120],
        ["SR", "Suriname", 243.33],
        ["SZ", "Swaziland", 140],
        ["SE", "Sweden", 256.67],
        ["CH", "Switzerland", 273.33],
        ["SY", "Syria", 170],
        ["TJ", "Tajikistan", 203.33],
        ["TZ", "Tanzania", 183.33],
        ["TH", "Thailand", 216.67],
        ["TG", "Togo", 163.33],
        ["TO", "Tonga", 220],
        ["TT", "Trinidad and Tobago", 230],
        ["TN", "Tunisia", 213.33],
        ["TR", "Turkey", 176.67],
        ["TM", "Turkmenistan", 133.33],
        ["GB", "U.K.", 236.67],
        ["US", "U.S.", 246.67],
        ["UG", "Uganda", 156.67],
        ["UA", "Ukraine", 120],
        ["AE", "United Arab Emirates", 246.67],
        ["UY", "Uruguay", 210],
        ["UZ", "Uzbekistan", 213.33],
        ["VU", "Vanuatu", 246.67],
        ["VE", "Venezuela", 246.67],
        ["VN", "Viet Nam", 203.33],
        ["YE", "Yemen", 206.67],
        ["ZM", "Zambia", 163.33],
        ["ZW", "Zimbabwe", 110]
    ]);

    var data1 = google.visualization.arrayToDataTable([
        ["Country", "Country", "Web Users"],
        ["AL", "Albania", 1823233],
        ["DZ", "Algeria", 7937913],
        ["AO", "Angola", 5951453],
        ["AG", "Antigua and Barbuda", 60306],
        ["AR", "Argentina", 30359855],
        ["AM", "Armenia", 1510906],
        ["AU", "Australia", 20679490],
        ["AT", "Austria", 6953400],
        ["AZ", "Azerbaijan", 6027647],
        ["BH", "Bahrain", 1278752],
        ["BD", "Bangladesh", 21439070],
        ["BB", "Barbados", 228717],
        ["BY", "Belarus", 5786572],
        ["BE", "Belgium", 10060745],
        ["BZ", "Belize", 165014],
        ["BJ", "Benin", 628683],
        ["BT", "Bhutan", 289177],
        ["BO", "Bolivia", 4478400],
        ["BA", "Bosnia and Herzegovina", 2343255],
        ["BW", "Botswana", 492787],
        ["BR", "Brazil", 139111185],
        ["BN", "Brunei", 310205],
        ["BG", "Bulgaria", 4155050],
        ["BF", "Burkina Faso", 1894498],
        ["BI", "Burundi", 167512],
        ["KH", "Cambodia", 1756824],
        ["CM", "Cameroon", 4311178],
        ["CA", "Canada", 32120519],
        ["CF", "Central African Republic", 224432],
        ["TD", "Chad", 387063],
        ["CL", "Chile", 14108392],
        ["CN", "China", 721434547],
        ["CO", "Colombia", 27664747],
        ["KM", "Comoros", 59242],
        ["CR", "Costa Rica", 2738500],
        ["CI", "Cote d'Ivoire", 5122897],
        ["HR", "Croatia", 3133485],
        ["CU", "Cuba", 3696765],
        ["CY", "Cyprus", 844680],
        ["CZ", "Czech Republic", 9323428],
        ["DK", "Denmark", 5479054],
        ["DJ", "Djibouti", 105163],
        ["DM", "Dominica", 48249],
        ["DO", "Dominican Republic", 5513852],
        ["EC", "Ecuador", 7055575],
        ["EG", "Egypt", 30835256],
        ["SV", "El Salvador", 2352849],
        ["GQ", "Equatorial Guinea", 181657],
        ["ER", "Eritrea", 56728],
        ["EE", "Estonia", 1196521],
        ["ET", "Ethiopia", 4288023],
        ["FJ", "Fiji", 419958],
        ["FI", "Finland", 5107402],
        ["FR", "France", 55860330],
        ["GA", "Gabon", 182309],
        ["GE", "Georgia", 2104906],
        ["DE", "Germany", 71016605],
        ["GH", "Ghana", 7958675],
        ["GR", "Greece", 7072534],
        ["GD", "Grenada", 41675],
        ["GT", "Guatemala", 4409997],
        ["GN", "Guinea", 236932],
        ["GW", "Guinea-Bissau", 66284],
        ["GY", "Guyana", 305007],
        ["HT", "Haiti", 1308290],
        ["HN", "Honduras", 1757467],
        ["HK", "Hong Kong", 5442101],
        ["HU", "Hungary", 7874733],
        ["IS", "Iceland", 331778],
        ["IN", "India", 462124989],
        ["ID", "Indonesia", 53236719],
        ["IR", "Iran", 39149103],
        ["IE", "Ireland", 3817392],
        ["IL", "Israel", 5941174],
        ["IT", "Italy", 39211518],
        ["JM", "Jamaica", 1216098],
        ["JP", "Japan", 115111595],
        ["JO", "Jordan", 3536871],
        ["KZ", "Kazakhstan", 9961519],
        ["KE", "Kenya", 21248977],
        ["KW", "Kuwait", 3202110],
        ["KG", "Kyrgyzstan", 2076220],
        ["LA", "Laos", 1087567],
        ["LV", "Latvia", 1491951],
        ["LB", "Lebanon", 4545007],
        ["LS", "Lesotho", 444376],
        ["LY", "Libya", 1335705],
        ["LT", "Lithuania", 2199938],
        ["LU", "Luxembourg", 548807],
        ["MG", "Madagascar", 1066397],
        ["MW", "Malawi", 1160839],
        ["MY", "Malaysia", 21090777],
        ["MV", "Maldives", 198071],
        ["ML", "Mali", 2212450],
        ["MT", "Malta", 334056],
        ["MR", "Mauritania", 714132],
        ["MU", "Mauritius", 543048],
        ["MX", "Mexico", 58016997],
        ["MD", "Moldova", 1946111],
        ["MN", "Mongolia", 1069693],
        ["MA", "Morocco", 20068556],
        ["MZ", "Mozambique", 1834337],
        ["MM", "Myanmar", 1353649],
        ["NA", "Namibia", 392181],
        ["NP", "Nepal", 4962323],
        ["NL", "Netherlands", 15915076],
        ["NZ", "New Zealand", 4078993],
        ["NI", "Nicaragua", 1194337],
        ["NE", "Niger", 439164],
        ["NG", "Nigeria", 86219965],
        ["NO", "Norway", 5167573],
        ["OM", "Oman", 3310260],
        ["PK", "Pakistan", 34342400],
        ["PA", "Panama", 1803261],
        ["PG", "Papua New Guinea", 906695],
        ["PY", "Paraguay", 3149519],
        ["PE", "Peru", 13036965],
        ["PH", "Philippines", 44478808],
        ["PL", "Poland", 27922152],
        ["PT", "Portugal", 6930762],
        ["QA", "Qatar", 2108970],
        ["RO", "Romania", 11236186],
        ["RU", "Russia", 102258256],
        ["RW", "Rwanda", 1478216],
        ["KN", "Saint Kitts and Nevis", 37210],
        ["LC", "Saint Lucia", 109370],
        ["WS", "Samoa", 56373],
        ["ST", "Sao Tome and Principe", 49686],
        ["SA", "Saudi Arabia", 20813695],
        ["SN", "Senegal", 3647939],
        ["SC", "Seychelles", 56168],
        ["SL", "Sierra Leone", 160188],
        ["SG", "Singapore", 4699204],
        ["SK", "Slovakia", 4477641],
        ["SI", "Slovenia", 1490358],
        ["SB", "Solomon Islands", 58423],
        ["ZA", "South Africa", 28580290],
        ["ES", "Spain", 37865104],
        ["LK", "Sri Lanka", 6087164],
        ["SD", "Sudan", 10886813],
        ["SR", "Suriname", 231420],
        ["SZ", "Swaziland", 362921],
        ["SE", "Sweden", 9169705],
        ["CH", "Switzerland", 7302714],
        ["SY", "Syria", 5502250],
        ["TJ", "Tajikistan", 1622924],
        ["TZ", "Tanzania", 2895662],
        ["TH", "Thailand", 29078158],
        ["TG", "Togo", 545020],
        ["TO", "Tonga", 49822],
        ["TT", "Trinidad and Tobago", 942713],
        ["TN", "Tunisia", 5472618],
        ["TR", "Turkey", 46196720],
        ["TM", "Turkmenistan", 789151],
        ["GB", "U.K.", 60273385],
        ["US", "U.S.", 286942362],
        ["UG", "Uganda", 7645197],
        ["UA", "Ukraine", 19678089],
        ["AE", "United Arab Emirates", 8515420],
        ["UY", "Uruguay", 2238991],
        ["UZ", "Uzbekistan", 15453227],
        ["VU", "Vanuatu", 82764],
        ["VE", "Venezuela", 18254349],
        ["VN", "Viet Nam", 49063762],
        ["YE", "Yemen", 6773228],
        ["ZM", "Zambia", 3167934],
        ["ZW", "Zimbabwe", 3356223]
    ]);

    var modeToUse = document.getElementsByClassName('mode active');
    var modeID = modeToUse.length == 0 ? modes[2].id : modeToUse[0].id;

    console.log(modeID + ", " + "mode_" + modes[0]);

    if (modeID == "mode_" + modes[0]) data = data1;
    else if (modeID == "mode_" + modes[1]) data = data2;
    else data = data3;

    options = {
        colorAxis: { colors: ['#00a1f1', '7cbb00', '#f65314'] },
        backgroundColor: '#fff',
        datalessRegionColor: '#f0f0f0',
        defaultColor: '#fff',
        legend: {
            textStyle: {
                color: '#333',
                fontName: 'Karla',
                fontSize: '18'
            }
        },
        tooltip: {
            textStyle: {
                color: '#333',
                fontName: 'Karla',
                fontSize: '18'
            }
        }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
}

function drawRegionsMap() {
    var chart = new google.visualization.GeoChart(document.getElementById('map'));
    chart.draw(data, options);
}