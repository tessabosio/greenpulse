// Inizializza la mappa
const map = L.map('map').setView([20, 0], 2); // Centra globalmente

// Aggiungi le piastrelle di OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Dati mappa &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributori'
}).addTo(map);

// Dati migliorati per i progetti di artivismo
const artivismData = [
    // Italia
    {
        location: [45.4642, 9.1900], // Milano
        title: "Milano Sostenibile",
        artist: "Pao",
        description: "Pinguini urbani dipinti su barriere stradali, simbolo della lotta al cambiamento climatico. <a href='https://www.paopao.it/it/'>www.paopao.it</a>",
        image: "https://www.paopao.it/images/StreetArt/PAO_streetart_2023_Amoretti_01.jpg"
    },
    {
            location: [45.0703, 7.6869], // Torino
            title: "Visioni di Futuro",
            artist: "Gec Art",
            description: 'Murales che immaginano un futuro sostenibile per le città. <br> <a href="http://www.gec-art.com/" target="_blank">gec-art.com</a>',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3iZJ_sVEoTnbI9QOr7IOzvnFP16FhaCXhw&s",
    },
    {
         location: [41.3874, 2.1686], // Barcellona
         title: "La Terra si scioglie",
         artist: "Pejac",
         description: 'Opera che simboleggia lo scioglimento massivo dei ghiacciai. <br> <a href="https://www.pejac.es/" target="_blank">pejac.es</a>',
         image: "https://street-art-avenue.com/wp-content/uploads/2014/01/pejac-mancha-santander-2.jpg"
    },    
    // Canada
    {
        location: [45.5017, -73.5673], // Montreal
        title: "Città Futura",
        artist: "Roadsworth",
        description: 'Strade dipinte per sensibilizzare sul tema della mobilità sostenibile. <br><a href="https://www.roadsworth.com/" target="_blank">www.roadsworth.com</a>',
        image: "https://images.squarespace-cdn.com/content/v1/5483a11be4b016eb8425635f/1694102750062-RBS6AZ5UG4BMION95TLI/DJI_0320.JPG?format=2500w",
    },
    // Norvegia
    {
        location: [59.9139, 10.7522], // Oslo
        title: "Luci del Nord",
        artist: "Artisti vari",
        description: 'Un progetto artistico e scientifico che unisce arte e ricerca sull\'oceano, situato nell\'Ocean Space Centre. Qui vengono realizzate mostre temporanee, installazioni e attività educative sulla conservazione marina e il riscaldamento globale. <br> <a href="https://www.ocean-space.org/it" target="_blank">ocean-space.org</a>',
        image: "https://lh4.googleusercontent.com/proxy/5cu9wv5LNyEU5Bfu0XJYqlbwMZnS3fJ_IsjPV79xyqA3XUBishCw7P_4KaG8RgMKiqiE9ATL--vE19H9Mf-I-xCz9EkmwRNGkdEQrSX79fKfKsMOm4OqlhPHexNgRr7Sh6f6"
    },
    // Argentina
    {
        location: [-34.6037, -58.3816], // Buenos Aires
        title: "Resistenza Urbana",
        artist: "Alfredo Segatori",
        description: 'Murales che denunciano il consumo eccessivo di risorse. <br> <a href="https://www.instagram.com/alfredosegatori/" target="_blank">alfredosegatori</a>',
        image: "https://buenosairesstreetart.com/wp-content/uploads/2015/02/benito-quinquela-martin-alfredo-segatori-buenos-aires-buenosairesstreetart.com-.jpg",
    },
    // Paesi Bassi
    {
        location: [52.3676, 4.9041], // Amsterdam
        title: "Città Circolare",
        artist: "Daan Roosegaarde",
        description: 'Come un\'inondazione virtuale, l\'opera rivela i livelli crescenti delle acque e sottolinea l\'importanza dell\'innovazione nell\'ambito idrico e del cambiamento climatico. <br> <a href="https://www.studioroosegaarde.net/project/waterlicht" target="_blank">waterlicht.net</a>',
        image: "https://images.adsttc.com/media/images/5555/a66a/e58e/ce16/aa00/01a7/large_jpg/daan-roosegaarde-museumplein-waterlicht-designboom-02.jpg?1431676518",
    },   
    // Stati Uniti
    {
        location: [34.0522, -118.2437], // Los Angeles
        title: "Earth in Peril",
        artist: "Lauren Bon e Metabolic Studio",
        description: 'Il progetto ha trasformato un terreno industriale in un campo di mais, richiamando l\'attenzione sul recupero degli ecosistemi urbani. <br> <a href="https://www.metabolicstudio.org/tags/not-a-cornfield" target="_blank">metabolicstudio.org</a>',
        image: "https://metabolicstudio-website-media.s3-us-west-1.amazonaws.com/cache/10/6e/106e82ec033fecf76afadbec3acd043b.jpg"
    },
    // Sud Africa
    {
        location: [-33.9258, 18.4232], // Città del Capo
        title: "Un futuro in fiamme",
        artist: "Faith47",
        description: 'Un\'opera che denuncia l\'emergenza dei cambiamenti climatici attraverso una serie di immagini simboliche. <br> <a href="https://wunderkammern.net/artistswk/faith47/?lang=it" target="_blank">wunderkammern.net</a>',
        image: "https://www.muralesmilano.it/wp-content/uploads/2020/10/faith47-street-art-sudafrica.jpg",
    },
    // Belgio
    {
        location: [50.8503, 4.3517], // Bruxelles
        title: "Cry for the Earth",
        artist: "Roa",
        description: "Murale che rappresenta gli animali in via di estinzione a causa della distruzione degli ecosistemi.",
        image: "https://images.lecho.be/view?iid=dc:161624116&context=ONLINE&ratio=16/9&width=640&u=1575041346000",
    },
    // Francia
    {
        location: [48.8566, 2.3522], // Parigi
        title: "Ice Watch",
        artist: "Olafur Eliasson e Minik Rosing",
        description: 'Blocchi di ghiaccio lasciati sciogliere in piazze pubbliche per sensibilizzare sullo scioglimento dei ghiacci polari. <br> <a href="https://olafureliasson.net/" target="_blank">olafureliasson.net</a>',
        image: "https://www.keblog.it/wp-content/uploads/2016/11/installazione-12-blocchi-ghiaccio-place-du-pantheon-olafur-eliasson-ice-watch-paris-4.jpg",
    },
    // Stati Uniti
    {
        location: [40.7128, -74.0060], // New York, HighWaterLine
        title: "HighWaterLine",
        artist: "Eve Mosher",
        description: 'Una linea che evidenzia le aree di Manhattan e Brooklyn a rischio inondazione a causa del cambiamento climatico. <br> <a href="https://www.evemosher.com/highwaterline" target="_blank">www.evemosher.com</a>',
        image: "https://static01.nyt.com/images/2007/06/16/arts/07.06.16.chalk.articlespan.jpg?quality=75&auto=webp",
    },
    {
        location: [39.9526, -75.1652], // Philadelphia, Beauty Shop
        title: "Beauty Shop",
        artist: "Lori Nix",
        description: 'Un\'opera che rappresenta una biblioteca devastata da un evento meteorologico estremo. <br> <a href="https://www.lorinix.net/" target="_blank">lorinix.net</a>',
        image: "https://artscore.it/wp-content/uploads/2020/06/Lori-Nix-Il-potere-della-Natura-Circulation-Desk-artscore.it_-1170x907.jpg",
    },
    {
        location: [55.6761, 12.5683], // Copenhagen, Flooded McDonald's
        title: "Flooded McDonald's",
        artist: "Superflex",
        description: 'Replica di un ristorante McDonald\'s lentamente sommerso dall\'acqua durante un temporale intenso. <br> <a href="https://superflex.net/" target="_blank">superflex.net</a>',
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVxzU78wfkYdA-5t3GldtZQoGleIFYLAxPKNG-1CFYGykeZsadvHKR1Aw5qgJB5rMKdwYYEWtTq0FOji1-1IyewJR05gTnYhQbSl0kn7361JO2KvqcV0T92FFPHk2MymAv3shuc6SuAIlD/s1600/danish+artist+trio+superflex+%2528rasmus+nielsen%252C+jakob+fenger+and+bj%25C3%25B8rnstjerne+christiansen%2529+wanted+to+depict+a+critique.jpg",
    },
    {
        location: [47.2184, -1.5536], // Nantes, Francia
        title: "Cement Eclipses",
        artist: "Isaac Cordal",
        description: 'Miniature in cemento che rappresentano l\'indifferenza della società verso il cambiamento climatico. <br> <a href="https://cementeclipses.com/" target="_blank">cementeclipses.com</a>',
        image: "https://cementeclipses.com/wp-content/uploads/2013/11/resized_IMG_3195.jpg",
    },
    // Singapore
    {
        location: [1.3521, 103.8198], // Singapore, The Plastic We Live With
        title: "The Plastic We Live With",
        artist: "Tan Zi Xi",
        description: 'Un ambiente immersivo composto da rifiuti plastici sospesi, evidenziando l\'inquinamento degli oceani. <br> <a href="https://www.instagram.com/messymsxi/" target="_blank">messymsxi</a>',
        image: "https://barbarapicci.com/wp-content/uploads/2019/10/tan-zi-xi.jpg",
    },    
    {
        location: [60.1695, 24.9354], // Helsinki, Finlandia
        title: "Earth",
        artist: "Antti Laitinen",
        description: 'Un\'isola artificiale creata con sabbia e pietre, esplorando il rapporto tra uomo e natura e la fragilità degli ecosistemi. <br> <a href="https://www.anttilaitinen.com/" target="_blank">anttilaitinen.com</a>',
        image: "https://d7hftxdivxxvm.cloudfront.net/?height=600&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FCzIiI7T2OZDStsMuE26OyA%2Flarger.jpg&width=600",
    },
    {
        location: [-25.2744, 133.7751], // Australia
        title: "The Drowning World Project",
        artist: "Gideon Mendel",
        description: 'Una serie fotografica che documenta persone e comunità colpite da inondazioni, evidenziando le conseguenze del cambiamento climatico. <br> <a href = "https://www.gideonmendel.com/" target="_blank">gideonmendel.com</a>',
        image: "https://www.cortonaonthemove.com/wp-content/uploads/2019/05/%C2%A9-Gideon-Mendel_Press-02.jpeg",
    },
        {
            location: [51.5074, -0.1278], // Londra, Regno Unito
            title: "I Don't Believe in Global Warming",
            artist: "Banksy",
            description: "Graffito dell'artista britannico Banksy che mostra la scritta 'I don't believe in global warming' parzialmente sommersa dall'acqua, evidenziando l'ironia del negazionismo climatico.",
            image: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/12/21/1261420209596/A-new-Banksy-piece-near-t-001.jpg?width=465&dpr=1&s=none&crop=none",
        },
        {
            location: [37.5407, -77.4360], // Richmond, Virginia, USA
            title: "Did I Make the Best Use of the Time I Had?",
            artist: "Noah Scalin, Daniel Caldel",
            description: 'Installazione che mostra una rappresentazione di Richmond, Virginia, sommersa dall\'acqua, con la frase Did I make the best use of the time I had?, invitando alla riflessione sull\'uso del tempo per combattere il cambiamento climatico. <br> <a href="https://www.noahscalin.com/" target="_blank">noahscalin.com</a>',
            image: "https://styleweekly.wppcdn.com/wp-content/uploads/2023/08/new_atlantis_old_dominion_final.jpg",
        },
        {
            location: [43.7696, 11.2558], // Firenze, Italia
            title: "Aerocene",
            artist: "Tomás Saraceno",
            description: 'Progetto dell\'artista argentino Tomás Saraceno, ideato come alternativa sostenibile all\'Antropocene. Le sculture aerosolari si librano in aria grazie al calore del Sole e alle radiazioni infrarosse della superficie terrestre, promuovendo un\'era libera dai combustibili fossili.<br> <a href="https://aerocene.org/" target="_blank">aerocene.org</a>',
            image: "https://www.palazzostrozzi.org/wp-content/uploads/2020/06/Toma%CC%81s-Saraceno_Aerographies_%C2%A9-Photography-by-Studio-Toma%CC%81s-Saraceno_8.2.jpg"
        },        
        {
            location: [27.9506, -82.4572], // Tampa, Florida, USA
            title: "Melting Panthers",
            artist: "Bob Partington",
            description: "Scultura in cera raffigurante una pantera che si scioglie progressivamente, simbolo delle minacce del cambiamento climatico. Creata con Zubi Advertising per sensibilizzare sull'urgenza di ridurre le emissioni di carbonio e proteggere la fauna selvatica.",
            image: "https://actipedia.org/sites/default/files/action_photos/melting%20panther_0.jpg",
        },
        {
            location: [-24.3963, -68.2032], // Deserto di Atacama, Cile
            title: "Unknown Fields",
            artist: "Unknown Fields",
            description: 'Unknown Fields esplora scenari alternativi di ecologie industriali e terre selvagge precarie, utilizzando film e video per riflettere sui futuri possibili. Il progetto In The Breast Milk of the Volcano (2016-2018) critica la sostenibilità delle batterie al litio, utilizzate per caricare dispositivi elettronici, dopo un\'espedizione in Bolivia e nel Deserto di Atacama.<br> <a href="https://unknownfieldsdivision.com/" target="_blank">unknownfieldsdivision.com</a>',
            image: "https://admin.liamyoung.org/media/pages/breastmilk-of-volcanoes/7be7474d7f-1608348915/rockwood-lithium-pools-from-the-air-03-liam-young-x180.jpg"
        },
        {
            location: [41.1251, 16.5933], // Bitonto, Bari, Italia
            title: "CLIMATE Project",
            artist: "Andreco",
            description: 'Il Climate Project di Andreco a Bitonto riflette sulla desertificazione e le sue cause, utilizzando colori ispirati alle mappe delle aree a rischio per sensibilizzare sugli effetti dei cambiamenti climatici in Puglia. <br> <a href="https://www.climateartproject.com/" target="_blank">climateartproject.com</a>',
            image: "https://www.climateartproject.com/wp-content/uploads/2017/09/130_andreco-climate-project-bitonto-16.jpg"
        },
        {
            location: [39.3999, -8.2245], // Portogallo
            title: "ARVORES",
            artist: "Andreco",
            description: 'ARVORES è una performance che sensibilizza sugli incendi causati dai cambiamenti climatici, ispirata da studi scientifici e poesia portoghese. Coinvolge la comunità locale e culmina in conferenze con esperti, seguite da uno degli incendi più devastanti della regione. <br> <a href="https://www.climateartproject.com/" target="_blank">climateartproject.com</a>',
            image: "https://www.climateartproject.com/wp-content/uploads/2020/04/136_gropu5web2.jpg"
        },
        {
            location: [28.6139, 77.2090], // Nuova Delhi, India
            title: "Climate 05 – Reclaim Air and Water",
            artist: "Andreco",
            description: 'Andreco ha creato un murale a Nuova Delhi usando lo smog per sensibilizzare sull\'inquinamento e i cambiamenti climatici. Il progetto include una performance collettiva e conferenze sulle soluzioni ambientali. <br> <a href="https://www.climateartproject.com/" target="_blank">climateartproject.com</a>',
            image: "https://www.climateartproject.com/wp-content/uploads/2019/04/Andreco_Reveals_Lodhi-Art-Fest-2019_PranavGohil-1_WEB_1500_A.jpg" // Sostituisci con l'URL dell'immagine dell'opera
        },
        {
            location: [44.4937, 11.3426], // Bologna, Italia
            title: "EMISSIONS",
            artist: "Andreco",
            description: 'Andreco ha creato un\'opera pubblica a Bologna, all\'Bus Station, per sensibilizzare sull\'inquinamento atmosferico causato dalle emissioni dei veicoli e dei sistemi di riscaldamento. Il murale è parte del *Climate Project* e include una narrazione simbolica su CO2, inquinamento e cambiamenti climatici.<br> <a href="https://www.climateartproject.com/" target="_blank">climateartproject.com</a>',
            image: "https://www.climateartproject.com/wp-content/uploads/2017/09/124_andrecovedutalargaweb.jpg"
        },
        {
            location: [45.4408, 12.3155], // Venezia, Italia
            title: "CLIMATE 04 – Sea Level Rise",
            artist: "Andreco",
            description: 'Andreco presenta a Venezia un progetto che esplora l\'innalzamento del livello del mare e le sue implicazioni sui cambiamenti climatici. Il progetto include un murale, un\'installazione con piante autoctone e un seminario sulle soluzioni scientifiche e artistiche al riscaldamento globale. <br> <a href="https://www.climateartproject.com/" target="_blank">climateartproject.com</a>',
            image: "https://www.climateartproject.com/wp-content/uploads/2017/09/Andreco_BIA_0057_like_agency_web.jpg"
        },
        {
            "location": [1.2921, 36.8219], // Kenya
            "title": "Inherit the Dust",
            "artist": "Nick Brandt",
            "description": 'La serie fotografica "Inherit the Dust" di Nick Brandt ritrae mammiferi in Kenya, posizionati in ambienti ora trasformati in discariche e zone industriali. Le immagini evidenziano la necessità di proteggere la fauna e gli habitat naturali dagli effetti dell\'industrializzazione e dei cambiamenti climatici, sensibilizzando sull\'importanza della conservazione. <br> <a href="https://www.nickbrandt.com/" target="_blank">nickbrandt.com</a>',
            "image": "https://www.thegreensideofpink.com/wp-content/uploads/2024/05/Inherit-the-dust-Nick-Brandt-1024x640.jpg"
        },
        {
            "location": [61.5567, 23.5985], // Ylöjärvi, Finlandia
            "title": "Tree Mountain - A Living Time Capsule",
            "artist": "Agnes Denes",
            "description": 'Tree Mountain è un progetto di land art realizzato da Agnes Denes: una montagna artificiale ellittica, piantata con 11.000 alberi da altrettante persone vicino a Ylöjärvi, Finlandia. Annunciato al Summit della Terra del 1992, il progetto unisce arte e sostenibilità, creando un bosco protetto per 400 anni. Gli alberi seguono uno schema basato sulla sezione aurea, simbolo dell\'armonia tra natura e matematica. <br> <a href="http://www.agnesdenesstudio.com/" target="_blank">agnesdenesstudio.com</a>',
            "image": "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMzQzNTI4OS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc4NDEzMzQ5OH0.yCv-xjQkXpZ46eujDcYFYlW1vnSnn_ZzEDCzBVegBjg/img.jpg?width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0"
        },
        {
            "location": [-37.7760, 144.9603], // Melbourne, Australia
            "title": "A Forest for Australia",
            "artist": "Agnes Denes",
            "description": "A Forest for Australia è un progetto di land art creato da Agnes Denes nel 1998, situato nell'Altoona Treatment Plant di Melbourne. Il progetto prevede la piantagione di 6000 alberi di una specie in pericolo, piantati in cinque spirali che, con la crescita degli alberi, diventeranno piramidi a gradoni. Questo intervento aiuta a combattere l'erosione del suolo e la desertificazione che minacciano l'Australia. <br> <a href=\"http://www.agnesdenesstudio.com/\" target=\"_blank\">agnesdenesstudio.com</a>",
            "image": "https://www.gww.com.au/sites/default/files/images/2023-03/DearAgnes_A-Forest_920x421.jpg"
        },
        {
            "location": [10.4806, -66.9036], // Caracas, Venezuela
            "title": "Il Murale di Plastica",
            "artist": "Oscar Olivares",
            "description": 'Un murale lungo 45 metri e alto 7 realizzato a Caracas con oltre 200.000 tappi di plastica, ispirato a Van Gogh e creato per sensibilizzare sul riciclo. <br> <a href="https://olivaresart.com/" target="_blank">olivaresart.com</a>',
            "image": "https://olivaresart.com/wp-content/uploads/2018/02/Portada-Website1.jpg"
        },
        {
            "location": [37.0381, 22.1142], // Kalamata, Grecia
            "title": "Sculture di Alluminio Riciclato",
            "artist": "Nikos Floros",
            "description": 'L\'artista greco Nikos Floros realizza sculture monumentali e ritratti utilizzando lattine di alluminio riciclate, trasformandole in abiti, scarpe, borse e opere ispirate alla famiglia imperiale russa. <br> <a href="https://www.nikosfloros.com/" target="_blank">nikosfloros.com</a>',
            "image": "https://www.nikosfloros.com/wp-content/uploads/2021/09/nikosfloros-iroes-apo-metalo-ROB_3392.jpg"
        },
        {
            "location": [-22.8522, -43.7750], // Rio de Janeiro, Brasile
            "title": "Arte dai Rifiuti",
            "artist": "Vik Muniz",
            "description": "L'artista brasiliano Vik Muniz crea opere ispirate a grandi maestri come Da Vinci e Warhol utilizzando materiali raccolti nella più grande discarica di Rio de Janeiro, sensibilizzando il pubblico sull'ecologia.",
            "image": "https://www.cogitoetvolo.it/wp-content/uploads/2021/06/1-1.jpg"
        },
        {
            "location": [41.9029, 12.4664], // Roma, Italia (Castel Sant'Angelo)
            "title": "Corona Save The Beach Hotel",
            "artist": "HA Schult",
            "description": 'Nel 2010, per sensibilizzare sul corretto smaltimento dei rifiuti e sulla tutela delle spiagge, Corona ha realizzato un hotel costruito con rifiuti raccolti su spiagge europee. L\'installazione temporanea, progettata dall\'artista tedesco HA Schult, è stata allestita a Roma nei pressi di Castel Sant\'Angelo. <br> <a href="https://www.haschult.de/" target="_blank">www.haschult.de</a>',
            "image": "https://www.studioargento.com/arte/trash-hotel/icons/pano05.jpg"
        },
        {
            "location": [38.7169, -9.1395], // Lisbona, Portogallo
            "title": "Sete Insaziabile",
            "artist": "Blu",
            "description": 'Blu, street artist italiano, ha realizzato nel 2015 a Lisbona l\'opera Sete Insaziabile, che rappresenta un uomo con una corona di loghi delle compagnie petrolifere, succhiando le risorse del pianeta attraverso una cannuccia, come critica alla marea nera e alla sfruttamento delle risorse naturali. <br> <a href="https://www.blublu.org/" target="_blank">blublu.org</a>',
            "image": "https://economiacircolare.com/wp-content/uploads/2022/01/Sete_insaziabile_Blu_arte_cambiamenti_climatici.jpg"
        },
        {
            "location": [19.5535, -87.8541], // Sian Ka’an, Messico
            "title": "Washed Up",
            "artist": "Alejandro Duràn",
            "description": 'Alejandro Duràn, artista messicano, con il progetto Washed Up affronta il problema dell\'inquinamento marino, documentando come la plastica trasportata dal mare si depositi sulle coste della riserva naturale di Sian Ka\'an. Il suo lavoro analizza l\'impatto umano sulla natura e promuove l\'educazione ambientale. <br> <a href="https://www.alejandroduran.com/" target="_blank">alejandroduran.com</a>',
            "image": "https://images.squarespace-cdn.com/content/v1/5de0a7f224b1dd71d8856f9f/1598003125262-WV1SAHALS9FE8VJYTKKQ/Alejandro+Duran+-+SOS.jpg"
        },
        {
            "location": [45.4408, 12.3155], // Venezia, Italia
            "title": "The Ice Monolith",
            "artist": "Stefano Cagol",
            "description": 'Stefano Cagol, artista trentino, ha esposto nel 2013 a Venezia il progetto The Ice Monolith, un blocco di ghiaccio di 1400 kg proveniente dalle Alpi, simbolo del cambiamento climatico. Lo scioglimento del ghiaccio rappresenta la minaccia per le zone costiere, come le Maldive, messe in pericolo dall\'innalzamento del livello del mare. <br> <a href="https://www.stefanocagol.com/" target="_blank">stefanocagol.com</a>',
            "image": "https://corriereinnovazione.corriere.it/methode_image/2019/07/09/Innovazione/Foto%20Innovazione/the%20ice%20monolith.JPG?v=20190715174510"
        },
        {
            "location": [-33.8915, 151.2767], // Bondi, Australia
            "title": "The Inconvenience Store",
            "artist": "Marina DeBris",
            "description": "Installazione del 2017 che simula un minimarket, dove tutta la 'merce' è costituita da materiali raccolti al largo della spiaggia e riconfezionati. Ha vinto 3 premi, tra cui il Peoples Choice al Sydney's Sculpture By the Sea, sensibilizzando sul problema dei rifiuti marini. <a href='http://www.washedup.us/' target='_blank'>washedup.us</a>",
            "image": "https://www.thegreensideofpink.com/wp-content/uploads/2021/10/The-Inconvenience-Store-Objects-1024x955.jpg"
        },
        {
            "location": [39.7285, -121.8375], // Chico State University, California, USA
            "title": "Oggi Decide il Domani",
            "artist": "Jerome 'J' Pouwels e gli studenti della classe di muralismo",
            "description": 'Nella primavera del 2023, Jerome J Pouwels e la sua classe di muralismo alla Chico State University hanno creato un murale che riflette l\'intersezione tra agricoltura, cambiamento climatico e azione comunitaria. Raffigurando un uccello che tiene uno striscione con il messaggio Oggi Decide il Domani, incoraggia pratiche agricole sostenibili. Il murale mostra mani diverse che piantano papaveri della California, simbolo di unità e speranza per un futuro sostenibile. <br> <a href="https://environment.ucdavis.edu/activism-through-art" target="_blank">environment.ucdavis.edu</a>',
            "image": "https://environment.ucdavis.edu/sites/g/files/dgvnsk12456/files/styles/sf_medium_width/public/media/images/IMG_3068-2resize.jpg?itok=ou2sfbUP"
        },
        {
            "location": [51.4545, -2.5879], // Bristol, Inghilterra
            "title": "Enorme Greta",
            "artist": "Jody Thomas",
            "description": 'Un murale realizzato durante il festival di Street Art Upfest Summer Editions a Bristol raffigura il volto della giovane attivista ambientale Greta Thunberg. L\'opera, creata dall\'artista Jody Thomas, sottolinea il ruolo di Greta come simbolo della lotta contro il cambiamento climatico. <br> <a href="https://www.jodyart.co.uk/?fbclid=PAZXh0bgNhZW0CMTEAAaZwpq-XZhNFlbgIG9SqbNpE2OIyRdcYnjvsOBcUoeyFEw-iWGq8fWDeb_M_aem_U7AhfW1G8isuCpfezzC6bQ" target="_blank">jodyart.co</a>',
            "image": "https://www.ehabitat.it/wp-content/uploads/2019/06/greta-thunberg-murale-bristol.jpg"
        },
        {
            "location": [45.4419, 12.3302], // Venezia, Italia
            "title": "Supporto Gigante",
            "artist": "Lorenzo Quinn",
            "description": 'L\'opera dell\'artista Lorenzo Quinn, presentata alla 57esima Biennale di Venezia, consiste in due mani giganti scolpite che reggono palazzo Ca\' Sagredo. Le mani simboleggiano il supporto necessario per mantenere stabile uno degli edifici storici più importanti della città, un atto che si inserisce nel contesto della lotta contro il cambiamento climatico che minaccia la bellezza e la storia di Venezia. <br> <a href=\"https://www.lorenzoquinn.com\" target=\"_blank\">lorenzoquinn.com</a>',
            "image": "https://sb.ecobnb.net/app/uploads/sites/2/2021/08/support-870x490.png.webp"
        },
        {
            "location": [44.8176, 20.4633], // Belgrado, Serbia
            "title": "Appetite for Destruction",
            "artist": "Blu",
            "description": "L'opera 'Appetite for Destruction' dell'artista Blu, situata sulla facciata di un palazzo a Belgrado, affronta il tema della cementificazione selvaggia. Il murale raffigura un uomo con denti a forma di palazzi che divora alberi, un potente simbolo contro la distruzione dell'ambiente e la crescita incontrollata delle città. <br> <a href=\"https://www.blublu.org/\" target=\"_blank\">blublu.org</a>",
            "image": "https://anteritalia.org/wp-content/uploads/2018/01/Appetite-for-Destruction-di-Blu.jpeg"
        },
        {
            "location": [53.1324, 23.1683], // Bialystok, Polonia
            "title": "Là dove c’era un fiore",
            "artist": "Natalia Rak",
            "description": 'L\'opera Là dove c’era un fiore di Natalia Rak, una giovane artista del 1986, è diventata celebre per la sua raffigurazione di una bambina con treccine rosse (finta) che innaffia con delicatezza un albero (vero). Questo murale è stato realizzato su un edificio popolare di Bialystok, in Polonia, ed è un simbolo di speranza e rinascita. <br> <a href=\"https://www.instagram.com/nataliarakart/" target=\"_blank\">natalia-rak</a>',
            "image": "https://anteritalia.org/wp-content/uploads/2018/01/%E2%80%9CL%C3%A0-dove-c%E2%80%99era-un-fiore%E2%80%9D-di-Natalia-Rak.jpg"
        },
        {
            "location": [52.5200, 13.4050], // Berlino, Germania
            "title": "Clessidra",
            "artist": "Blu",
            "description": 'Sull\'alta colonna di un palazzo di uffici a Berlino, lo street artist Blu ha realizzato un\'immensa clessidra che ci scruta dall\'alto, un monito sul fatto che il tempo scorre inesorabile. Con questo murales, Blu sensibilizza il pubblico riguardo lo scioglimento dei ghiacciai e l\'innalzamento del livello del mare, fenomeni che minacciano le nostre città. La clessidra diventa un simbolo di urgenza, ricordandoci che è il momento di agire prima che sia troppo tardi. <br> <a href=\"https://www.blublu.org/\" target=\"_blank\">blublu.org</a>',
            "image": "https://www.muralesmilano.it/wp-content/uploads/2023/03/global-warming-emergenza.jpeg"
        },
        {
            "location": [63.567, 10.537], // Tautra, Norvegia
            "title": "Pollution Pods",
            "artist": "Michael Pinsky",
            "description": 'Un progetto promosso da Cape Farewell, le Pollution Pods di Michael Pinsky sono cupole geodetiche che riproducono l\'ambiente inquinato delle grandi metropoli. Il progetto, concepito per sensibilizzare sull\'inquinamento atmosferico globale, è stato pianificato per un tour mondiale nel 2020, subendo però interruzioni a causa dell\'emergenza sanitaria. <br> <a href=\"https://www.michaelpinsky.com/\" target=\"_blank\">michaelpinsky.com</a>',
            "image": "https://www.michaelpinsky.com/wp-content/uploads/2017/07/12.-Pollution-Pods-by-Michael-Pinsky-at-Somerset-House-for-Earth-Day-2018-c-Peter-Macdiarmid-for-Somerset-House-1-e1615463490149.jpg"
        },
        {
            "location": [41.1239, -8.6110], // Vila Nova de Gaia, Portogallo
            "title": "O Coelho (Il Coniglio)",
            "artist": "Bordalo II",
            "description": "Situata a Vila Nova de Gaia, sulle sponde del fiume Douro di fronte a Porto, 'O Coelho' è un'opera di Bordalo II che trasforma materiali di scarto in un'icona visiva. Quest'opera sottolinea l'importanza del riciclo e dell'arte sostenibile, mostrando come i rifiuti possano essere trasformati in bellezza.",
            "image": "https://i.pinimg.com/736x/c3/91/c2/c391c27ade859733c2a005ddd7f812cd.jpg"
        },
        {
            "location": [40.2033, -8.4103], // Coimbra, Portogallo
            "title": "Half Gorilla (Il Gorilla)",
            "artist": "Bordalo II",
            "description": "Situata a Coimbra, 'Half Gorilla' è un'opera di Bordalo II che rappresenta gli animali in una fusione tra rifiuti colorati e superfici monocromatiche. L'opera evidenzia la dicotomia tra natura e degrado urbano, sensibilizzando il pubblico sul tema dell'impatto umano sull'ambiente.",
            "image": "https://cdn.artcld.com/img/w_1920,c_fit/hlv7lokpxh6owxahbii4.jpg"
        },
        {
            "location": [45.2251, 11.6641], // Este, Italia
            "title": "Il Riccio",
            "artist": "Bordalo II",
            "description": "Realizzata nel 2015 a Este, 'Il Riccio' è una scultura di Bordalo II che trasforma un vecchio parcheggio di autobus in un'esperienza artistica unica. L'opera utilizza materiali di scarto per creare un riccio gigante, combinando arte e sostenibilità per ridefinire uno spazio industriale in chiave creativa.",
            "image": "https://www.corriere.it/methode_image/2021/04/09/Interni/Foto%20Interni%20-%20Trattate/Bordalo-kB0B-U32501760120458QP-656x492@Corriere-Web-Sezioni.jpg"
        },
        {
            "location": [45.4064, 11.8768], // Padova, Italia, zona industriale
            "title": "I Don’t Want Your Hope",
            "artist": "Axe",
            "description": 'Situato nella zona industriale di Padova, il murale I Don’t Want Your Hope dello street artist Axe cita Greta Thunberg per sensibilizzare sul cambiamento climatico. L\'opera è un potente richiamo all\'urgenza di azioni concrete e rappresenta un esempio di arte urbana impegnata. <br> <a href="http://axegallery.it/gallery/" target="_blank">axegallery.it</a>',
            "image": "https://lh5.googleusercontent.com/proxy/GLHT4DGFg5IdlGQsXbPd23LX4bJ4B6oVLxNk61FKSCz8Koz47yRBscTtp5LGv7w2pNuHteSdkxXXo-t7WgMvhO3I38K8f_57PZyLEHTWAxs0BQe7pJ-uqM4JNx8JHsBnTno0ysYeTgdfZq368rQ9"
        },
        {
            "location": [40.8225, 14.2035], // Napoli, Italia, Fuorigrotta
            "title": "#UnlockTheChange",
            "artist": "Zed1",
            "description": 'Situata a Napoli, nel quartiere Fuorigrotta, #UnlockTheChange di Zed1 è una delle opere antismog più grandi in Italia. Capace di assorbire lo smog prodotto da 79 automobili, questa imponente installazione è un esempio di come l\'arte urbana possa contribuire concretamente alla sostenibilità ambientale. <br> <a href="https://www.instagram.com/zed1_art/" target="_blank">instagram.com/zed1</a>',
            "image": "https://www.art-vibes.com/wp-content/uploads/2023/07/zed1-unlock-3.jpg"
        },
        {
            "location": [56.1629, 10.2039], // Danimarca
            "title": "Lungo la costa danese",
            "artist": "Arunkumar",
            "description": 'Per la realizzazione di quest’opera sono stati utilizzati circa 70.000 tappi di bottiglia raccolti in diverse città del mondo. Tappi colorati e sovrapposti, intessuti con fili di acciaio per legarli verticalmente, formano questa installazione che simboleggia il legame tra l’uomo, i rifiuti e l’ambiente costiero. <br> <a href="https://arunkumarhg.com/" target="_blank">arunkumar.com</a>',
            "image": "https://www.thegreensideofpink.com/wp-content/uploads/2021/02/Arunkumar-1.jpg"
        },
        {
    "location": [43.7267, 12.6366],
    "title": "La Spesa del Futuro",
    "artist": "Tessa Bosio",
    "description": "La Spesa del Futuro mostra un mondo in cui la natura è distrutta e l’unico cibo rimasto è la plastica. Questa plastica alimentare è il simbolo di un legame spezzato con la Terra e un monito sulle conseguenze del nostro sfruttamento ambientale. Un invito urgente a cambiare, perché ciò che scegliamo oggi decide il futuro di chi vivrà domani. <br><a href=\"spesa.html\" target=\"_blank\">Per saperne di più, clicca qui.</a>",
    "image": "mostrapi.jpeg"
}
                                                    
    ];

artivismData.forEach((project) => {
    const marker = L.marker(project.location).addTo(map);

    // Crea il contenuto del popup
    const popupContent = `
        <div class="popup-content">
            <img src="${project.image}" alt="${project.title}">
            <p><strong>Artista:</strong> ${project.artist}</p>
            <p>${project.description}</p>
        </div>
    `;

    marker.bindPopup(popupContent);
});

// Debug: conferma il caricamento della mappa
console.log("Mappa inizializzata con successo.");
