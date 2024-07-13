myData = [
[50.06448229999999,19.9232752, 'al. Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.0191892,31.502902, 'AUC Ave, New Cairo 1, Cairo Governorate 11835, Egypt'],
[33.4229975,-111.9278306, '1151 S Forest Ave, Tempe, AZ, USA'],
[38.0399395,23.8030909, 'Monumental Plaza, Building C, 1st Floor, Leof. Kifisias 44, Marousi 151 25, Greece'],
[28.3591259,75.58816379999999, 'BITS, Pilani, Rajasthan 333031, India'],
[6.8920758,3.7181452, 'VPQ9+VPP, Ilishan-Remo 121103, Ogun State, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9504048,77.5020617, 'Mysore Rd, Jnana Bharathi, Bengaluru, Karnataka 560056, India'],
[31.5500848,-97.11354, '1311 S 5th St, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xin Wai Da Jie, Beitaipingzhuang, Hai Dian Qu, Bei Jing Shi, China, 100875'],
[53.8930049,27.545623, 'prasp. Niezaliežnasci 4, Minsk, Minskaja voblasć, Belarus'],
[44.8184518,20.4575913, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8930049,27.545623, 'prasp. Niezaliežnasci 4, Minsk, Minskaja voblasć, Belarus'],
[31.261426,34.7995546, 'David Ben Gurion Blvd 1, Beer Sheva, Israel'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Mandaiyur, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Commonwealth Ave, Boston, MA 02215, USA'],
[35.3050053,-120.6624942, '1 Grand Ave, San Luis Obispo, CA 93407, USA'],
[34.1815133,-117.3229136, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210416,-0.1746649, '25 Paddington Grn, London W2 1NB, UK'],
[40.8075355,-73.9625727, '116th and Broadway, New York, NY 10027, USA'],
[52.0686347,-0.6087410999999999, 'Cranfield, Bedford MK43, UK'],
[50.1031749,14.3947511, 'Jugoslávských partyzánů 1580, 160 00 Praha 6, Czechia'],
[43.7044406,-72.2886934, 'Hanover, NH 03755, USA'],
[37.3192806,-122.0447919, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[51.3769424,7.4946354, 'Universitätsstraße 11, 58097 Hagen, Germany'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipro, Dnipropetrovska oblast, Ukraine, 49000'],
[38.430691,27.13692, 'Kültür, Cumhuriyet Blv No:35210 no 144, 35220 Konak/İzmir, Türkiye'],
[39.9566127,-75.18994409999999, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.2850284,-97.7335226, '2515 Speedway, Austin, TX 78712, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.7864448,4.7641329, '23 Av. Guy de Collongue, 69130 Écully, France'],
[48.709445,2.1661629, 'Centralesupélec, 3 Rue Joliot Curie, 91190 Gif-sur-Yvette, France'],
[36.1028244,-79.5023649, '100 Campus Dr, Elon, NC 27244, USA'],
[54.9134845,9.7782317, 'Alsion 4, 6400 Sønderborg, Denmark'],
[51.24683899999999,6.7916647, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[47.7233835,13.0871253, 'Urstein S 1, 5412 Salzburg, Austria'],
[-23.5557714,-46.6395571, 'São Paulo, State of São Paulo, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 21000, Serbia'],
[40.7529167,-73.4266988, '2350 NY-110, Farmingdale, NY 11735, USA'],
[-19.870682,-43.9677359, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3737473,-80.10190229999999, '777 Glades Rd, Boca Raton, FL 33431, USA'],
[42.7789743,-72.05553929999999, '40 University Dr, Rindge, NH 03461, USA'],
[26.1540389,91.66296679999999, 'Gopinath Bordoloi Nagar, Jalukbari, Guwahati, Assam 781014, India'],
[38.8314094,-77.31115299999999, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.38528190000001, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[50.87485419999999,4.7077677, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.0072964,105.8426436, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[17.4448649,78.34981379999999, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5123388,80.2329, 'G66M+W5J, Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[58.595272,25.013607, 'Estonia'],
[45.440379,12.3159547, 'Venice, Metropolitan City of Venice, Italy'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[41.525031,-88.0817251, 'Joliet, IL, USA'],
[12.9915639,80.2336857, 'Indian Institute Of Technology, Chennai, Tamil Nadu, India'],
[22.3149274,87.31053109999999, 'Kharagpur, West Bengal 721302, India'],
[23.8144169,86.441249, 'IIT (ISM, shop no. 4, RD, IIT (ISM, Sardar Patel Nagar, Kalyanpur, Dhanbad, Jharkhand 826004, India'],
[39.1682449,-86.52300729999999, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1682449,-86.52300729999999, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[12.2944542,-1.5449604, '7FV4+Q2M, Sandogo, Ouagadougou, Burkina Faso'],
[18.4880037,-69.96249499999999, 'Av. de Los Próceres 49, Santo Domingo 10602, Dominican Republic'],
[17.4448649,78.34981379999999, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[52.2766643,104.2777445, 'Ulitsa Karla Marksa, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[22.4988822,88.3714123, '188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West Bengal 700032, India'],
[17.4932682,78.3913929, 'Ashok Nagar, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085, India'],
[28.5398035,77.1664047, 'New Mehrauli Road, JNU Ring Rd, New Delhi, Delhi 110067, India'],
[32.4950392,35.9912257, '3030, الرمثا، Jordan'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[42.290035,-85.598145, '1200 Academy St, Kalamazoo, MI 49006, USA'],
[54.898991,23.912825, 'K. Donelaičio g. 73, 44249 Kaunas, Lithuania'],
[54.898991,23.912825, 'K. Donelaičio g. 73, 44249 Kaunas, Lithuania'],
[55.7906985,49.1216444, 'ulitsa Kremlevskaya, 18, Kazan, Respublika Tatarstan, Russia, 420008'],
[41.1438917,-81.3365012, '800 E Summit St, Kent, OH 44240, USA'],
[49.9953019,36.2412463, 'Marshala Bazhanova St, 17, Kharkiv, Kharkivska oblast, Ukraine, 61002'],
[13.6512522,100.4964428, '126 Thanon Pracha Uthit, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[53.2871307,69.40444939999999, '020000 Kokshetau, Kazakhstan'],
[50.4488974,30.456977, 'Beresteiskyi Ave, 37, Kyiv, Ukraine, 03056'],
[50.4488974,30.456977, 'Beresteiskyi Ave, 37, Kyiv, Ukraine, 03056'],
[50.4503596,30.5245025, 'Kyiv, Ukraine, 02000'],
[46.4672485,-80.9757296, '935 Ramsey Lake Rd, Sudbury, ON P3E 2C6, Canada'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[49.840348,24.0222967, 'Universytetska St, 1, Lviv, Lvivska oblast, Ukraine, 79000'],
[42.7250725,-84.47908269999999, 'East Lansing, MI, USA'],
[13.0660293,80.28317190000001, 'Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India'],
[53.42119599999999,58.98193999999999, 'Lenin Ave, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.3129573,48.8285422, 'Hamadan Province, Malayer, جاده سلامت، 8R7H+5CM, Iran'],
[39.4167881,-81.44925649999999, '215 5th St, Marietta, OH 45750, USA'],
[44.8199188,20.4587075, 'Studentski trg 16, Beograd 105104, Serbia'],
[42.7250725,-84.47908269999999, 'East Lansing, MI, USA'],
[39.88983820000001,32.780086, 'Üniversiteler, Dumlupınar Blv. 1/6 D:133, 06800 Çankaya/Ankara, Türkiye'],
[37.9537078,-91.7756271, '106, Parker Hall, 300 W 13th St, Rolla, MO 65409, USA'],
[-37.9015913,145.1155133, 'City of Monash, VIC, Australia'],
[-37.9142416,145.1346592, 'Wellington Rd, Clayton VIC 3800, Australia'],
[-38.3090975,146.4255391, '1 Northways Rd, Churchill VIC 3842, Australia'],
[25.6515649,-100.28954, 'Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64849 Monterrey, N.L., Mexico'],
[55.6502051,37.6643098, 'Kashira Hwy, 31, Moskva, Russia, 115409'],
[55.70393490000001,37.5286695, 'Ulitsa Kolmogorova, 1, Moskva, Russia, 119991'],
[22.2512261,84.90628989999999, 'National Institute of Technology, Sector 1, Rourkela, Odisha, India'],
[40.72951339999999,-73.9964609, 'New York, NY 10012, USA'],
[21.1490973,79.0395223, '42XQ+JRJ, Amravati Rd, Gokulpeth, Nagpur, Maharashtra 440033, India'],
[1.3483099,103.6831347, '50 Nanyang Ave, Singapore 639798'],
[31.3958746,75.5358439, 'Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Gopalpur Alias Bidh, Punjab 144011, India'],
[25.0173405,121.5397518, 'No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City, Taiwan 10617'],
[-12.0238022,-77.04840589999999, 'Av. Túpac Amaru 210, Rímac 15333, Peru'],
[41.772663,-88.1440142, '30 N Brainard St, Naperville, IL 60540, USA'],
[42.339904,-71.0898892, '360 Huntington Ave, Boston, MA 02115, USA'],
[42.0564594,-87.67526699999999, '633 Clark St, Evanston, IL 60208, USA'],
[55.13719099999999,36.607059, 'Obninsk, Kaluga Oblast, Russia, 249034'],
[36.8853217,-76.3058786, '5115 Hampton Blvd, Norfolk, VA 23529, USA'],
[42.25538520000001,-121.7852487, '3201 Campus Dr, Klamath Falls, OR 97601, USA'],
[19.4436005,-70.6843785, 'Autopista Duarte Km 1 1/2, Santiago de los Caballeros 51000, Dominican Republic'],
[35.8012314,51.5028533, 'Tehran Province, Tajrish, اتوبان ارتش کوی نفت, Nakhl St, RG23+F4X, Iran'],
[40.7982133,-77.8599084, '201 Old Main, University Park, PA 16802, USA'],
[45.468503,9.182402699999999, 'Milan, Metropolitan City of Milan, Italy'],
[44.4386064,26.0494925, 'Splaiul Independenței 313, București 060042, Romania'],
[45.7536393,21.2251614, 'Piața Victoriei 2, Timișoara 300006, Romania'],
[12.0182619,79.8568461, 'Pondicherry University, Chinna Kalapet, Kalapet, Puducherry 605014, India'],
[-33.4410921,-70.64073789999999, 'Av. Libertador Bernardo OHiggins 340, 8320165 Santiago, Región Metropolitana, Chile'],
[45.5111153,-122.6833385, '1825 SW Broadway, Portland, OR 97201, USA'],
[40.4237054,-86.92119459999999, '610 Purdue Mall, West Lafayette, IN 47907, USA'],
[12.9237228,77.4987012, 'Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059, India'],
[42.7297628,-73.67888839999999, '110 8th St, Troy, NY 12180, USA'],
[41.0815852,-74.17610150000002, '505 Ramapo Valley Rd, Mahwah, NJ 07430, USA'],
[43.0848486,-77.6715353, '1 Lomb Memorial Dr, Rochester, NY 14623, USA'],
[10.7285131,79.0184111, 'Trichy-Tanjore Road, Thirumalaisamudram, Thanjavur, Thirumalaisamudram, Tamil Nadu 613401, India'],
[59.941894,30.2989198, 'University Embankment, 7/9, Sankt-Peterburg, Russia, 199034'],
[59.929491,30.296608, 'Bolshaya Morskaya Ulitsa, 67, Sankt-Peterburg, Russia, 190000'],
[59.9310584,30.3609097, 'St Petersburg, Russia'],
[37.7241492,-122.4799405, '1600 Holloway Ave, San Francisco, CA 94132, USA'],
[37.3351874,-121.8810715, '1 Washington Sq, San Jose, CA 95192, USA'],
[31.0252201,121.4337784, 'China, Shang Hai Shi, Min Hang Qu, 老闵行东川路 邮政编码: 200240'],
[35.7036491,51.3517033, 'Tehran, Azadi Ave, P932+FM4, Iran'],
[10.408363,-66.8755735, 'Sartenejas, Caracas, Miranda, Venezuela'],
[49.27908859999999,-122.9201795, '8888 University Dr W, Burnaby, BC V5A 1S6, Canada'],
[54.7845032,32.0452469, 'Ulitsa Przhevalskogo, 4, Smolensk, Smolenskaya oblast, Russia, 214000'],
[38.3409222,-122.6730677, '1801 E Cotati Ave, Rohnert Park, CA 94928, USA'],
[44.4332856,26.100986, 'Strada Ion Ghica 13, București 030045, Romania'],
[37.42410599999999,-122.1660756, 'Stanford, CA, USA'],
[-22.8184393,-47.0647206, 'Cidade Universitária Zeferino Vaz - Barão Geraldo, Campinas - SP, 13083-970, Brazil'],
[43.4553461,-76.5104973, 'Oswego, NY, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, South Africa'],
[42.05810530000001,-71.08091300000001, '320 Washington St, North Easton, MA 02357, USA'],
[59.4387321,24.7713836, 'Narva mnt 25, 10120 Tallinn, Estonia'],
[59.394824,24.6715322, 'Ehitajate tee 5, 19086 Tallinn, Estonia'],
[61.4498286,23.8589986, 'Korkeakoulunkatu 7 Kampusareena, 33720 Tampere, Finland'],
[30.7985967,31.0017982, 'مبنى اللغات الاجنبية، شارع معاوية، طنطا (قسم 2)، طنطا, طنطا (قسم 2)، قسم ثان طنطا، محافظة الغربية 6632505, Egypt'],
[32.7732044,-97.35165579999999, 'Tarrant County, TX, USA'],
[46.7692463,23.5857078, 'Strada Memorandumului 28, Cluj-Napoca 400114, Romania'],
[32.7767783,35.0231271, 'Haifa, 3200003, Israel'],
[32.113496,34.803609, 'Chaim Levanon St 55, Tel Aviv-Yafo, 6997801, Israel'],
[31.768319,35.21371, 'Jerusalem, Israel'],
[56.95080979999999,24.1163132, 'Raiņa bulvāris 19, Centra rajons, Rīga, LV-1586, Latvia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[-25.7676604,28.1992624, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[38.0516801,-84.49334189999999, '300 N Broadway, Lexington, KY 40508, USA'],
[42.4085371,-71.1182729, '419 Boston Ave, Medford, MA 02155, USA'],
[37.87015100000001,-122.2594606, 'University Avenue and, Oxford St, Berkeley, CA 94720, USA'],
[34.0699182,-118.4438495, 'Los Angeles, CA 90095, USA'],
[32.881168,-117.2343605, '9500 Gilman Dr, La Jolla, CA 92093, USA'],
[40.1019523,-88.2271615, 'Champaign, IL, USA'],
[38.9869183,-76.9425543, 'College Park, MD 20742, USA'],
[-25.7676604,28.1992624, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 Cdad. Autónoma de Buenos Aires, Argentina'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[43.076592,-89.4124875, 'Madison, WI, USA'],
[10.4899673,-66.8913397, 'Facultad de Ciencias, Sierra Maestra, Caracas 1040, Distrito Capital, Venezuela'],
[40.4454368,-3.7299424, 'Av. Complutense, s/n, Moncloa - Aravaca, 28040 Madrid, Spain'],
[19.332795,-99.1876103, 'Av. Universidad 3004, Copilco Universidad, Coyoacán, 04510 Ciudad de México, CDMX, Mexico'],
[9.9995038,-84.1092577, 'Av 1 86, Heredia, 40101, Costa Rica'],
[4.570868,-74.297333, 'Colombia'],
[-16.5149951,-68.1586549, 'FRPR+2G5, C. 11 Villa Dolores, El Alto, Bolivia'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 Cdad. Autónoma de Buenos Aires, Argentina'],
[38.9934998,-3.9254365, 'Rectorado UCLM, C. Altagracia, 50, 13001 Ciudad Real, Spain'],
[4.601458099999999,-74.0661334, 'Cra. 1 #18a-12, La Candelaria, Bogotá, Cundinamarca, Colombia'],
[10.1732454,-64.6525884, '58FW+7XV, Via Alterna, Puerto La Cruz 6001, Anzoátegui, Venezuela'],
[14.5878975,-90.5517222, '11 Avenida, Cdad. de Guatemala, Guatemala'],
[41.652251,-4.724532099999999, 'Valladolid, Spain'],
[4.8615787,-74.0325368, 'Chía, Cundinamarca, Colombia'],
[14.603762,-90.48924799999999, '18 Avenida 11-95 Guatemala, Interior UVG, Cdad. de Guatemala 01015, Guatemala'],
[-7.137748500000001,-34.8458974, 'Campus I Lot. Cidade Universitaria - Castelo Branco, João Pessoa - PB, 58051-900, Brazil'],
[-26.928572,-49.36531489999999, 'State of Santa Catarina, Brazil'],
[-30.0339726,-51.2190483, 'Farroupilha, Porto Alegre - RS, 90040-040, Brazil'],
[-22.8674532,-43.2151914, 'R. Antônio Barros de Castro, 119 - Cidade Universitária, Rio de Janeiro - RJ, 21941-853, Brazil'],
[38.7222524,-9.1393366, 'Lisbon, Portugal'],
[-23.5557714,-46.6395571, 'São Paulo, State of São Paulo, Brazil'],
[41.5607319,-8.3962368, 'R. da Universidade, 4710-057 Braga, Portugal'],
[-7.7715616,110.3777, 'Bulaksumur, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia']
];
