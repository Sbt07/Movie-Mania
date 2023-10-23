const wordList = [
    {
      word: "dilwaledulhanialejayenge",
      hint: "Classic love story featuring Shah Rukh Khan and Kajol"
    },
    {
      word: "sholay",
      hint: "Iconic action-adventure film with Amitabh Bachchan and Dharmendra"
    },
    {
      word: "kabhikhushikabhiegham",
      hint: "Family drama starring Shah Rukh Khan and Amitabh Bachchan"
    },
    {
      word: "lagaan",
      hint: "Epic sports drama set during the British Raj"
    },
    {
      word: "threeidiots",
      hint: "Comedy-drama about college life and friendship"
    },
    {
      word: "kuchkuchhotahai",
      hint: "Romantic drama featuring Shah Rukh Khan and Kajol"
    },
    {
      word: "dilchahtahai",
      hint: "Coming-of-age film about three friends"
    },
    {
      word: "pk",
      hint: "Satirical comedy-drama starring Aamir Khan"
    },
    {
      word: "meranaamjoker",
      hint: "Drama film with Raj Kapoor in the lead role"
    },
    {
      word: "golmaal",
      hint: "Comedy film series known for its humor"
    },
    {
      word: "koimilgaya",
      hint: "Science fiction film about an extraterrestrial visitor"
    },
    {
      word: "chennaiexpress",
      hint: "Action-comedy featuring Shah Rukh Khan and Deepika Padukone"
    },
    {
      word: "rangdebasanti",
      hint: "Drama film about young revolutionaries"
    },
    {
      word: "mughaleazam",
      hint: "Epic historical film set during the Mughal era"
    },
    {
      word: "rockstar",
      hint: "Musical drama starring Ranbir Kapoor"
    },
    {
      word: "bajrangibhaijaan",
      hint: "Drama film about a man's journey to reunite a mute girl with her family"
    },
    {
      word: "lagerahomunnabhai",
      hint: "Comedy-drama featuring Sanjay Dutt"
    },
    {
      word: "dabangg",
      hint: "Action-comedy with Salman Khan as a fearless cop"
    },
    {
      word: "kabhialvidanaakehna",
      hint: "Drama about complex relationships"
    },
    {
      word: "padosan",
      hint: "Classic comedy film known for its music"
    },
    {
      word: "mynameiskhan",
      hint: "Drama about an autistic man's journey"
    },
    {
      word: "omshantiom",
      hint: "Romantic drama featuring Shah Rukh Khan and Deepika Padukone"
    },
    {
      word: "dilse..",
      hint: "Romantic thriller with Shah Rukh Khan and Manisha Koirala"
    },
    {
      word: "kapoor&sons",
      hint: "Drama film about a dysfunctional family"
    },
    {
      word: "dilchahtahai",
      hint: "Coming-of-age film about three friends"
    },
    {
      word: "wakeupsid",
      hint: "Coming-of-age drama with Ranbir Kapoor"
    },
    {
      word: "diltopagalhai",
      hint: "Musical romance starring Shah Rukh Khan, Madhuri Dixit, and Karisma Kapoor"
    },
    {
      word: "queen",
      hint: "Comedy-drama about a woman's journey of self-discovery"
    },
    {
      word: "swades",
      hint: "Drama film about an NRI's return to India"
    },
    {
      word: "don",
      hint: "Action thriller featuring Shah Rukh Khan"
    },
    {
      word: "jabtakhaijaan",
      hint: "Romantic drama directed by Yash Chopra"
    },
    {
      word: "raazi",
      hint: "Spy thriller starring Alia Bhatt"
    },
    {
      word: "barfi",
      hint: "Romantic comedy-drama with Ranbir Kapoor and Priyanka Chopra"
    },
    {
      word: "andhadhun",
      hint: "Thriller about a blind pianist"
    },
    {
      word: "kuchkuchhotahai",
      hint: "Romantic drama featuring Shah Rukh Khan and Kajol"
    },
    {
      word: "kesari",
      hint: "War film based on the Battle of Saragarhi"
    },
    {
      word: "aedilhaimushkil",
      hint: "Romantic drama directed by Karan Johar"
    },
    {
      word: "kabhikhushikabhiegham",
      hint: "Family drama starring Shah Rukh Khan and Amitabh Bachchan"
    },
    {
      word: "munnabhaimbbs",
      hint: "Comedy-drama featuring Sanjay Dutt"
    },
    {
      word: "kabhikhushikabhiegham",
      hint: "Family drama starring Shah Rukh Khan and Amitabh Bachchan"
    },
    {
      word: "munnabhaimbbs",
      hint: "Comedy-drama featuring Sanjay Dutt"
    },
    {
      word: "ludo",
      hint: "Anthology film directed by Anurag Basu"
    },
    {
      word: "dilwale",
      hint: "Action-comedy starring Shah Rukh Khan and Kajol"
    },
    {
      word: "lootera",
      hint: "Romantic drama set in the 1950s"
    },
    {
      word: "gullyboy",
      hint: "Musical drama based on the Mumbai hip-hop scene"
    },
    {
      word: "ghajini",
      hint: "Action thriller starring Aamir Khan"
    },
    {
      word: "queen",
      hint: "Comedy-drama about a woman's journey of self-discovery"
    },
    {
      word: "piku",
      hint: "Drama about a daughter's relationship with her father"
    },
    {
      word: "lagaan",
      hint: "Epic sports drama set during the British Raj"
    },
    {
      word: "m.s.dhoni:theuntoldstory",
      hint: "Biographical sports film about cricketer M.S. Dhoni"
    },
    {
      word: "ra.one",
      hint: "Science fiction superhero film with Shah Rukh Khan"
    },
    {
      word: "chakdeindia",
      hint: "Sports drama starring Shah Rukh Khan"
    },
    {
      word: "tamasha",
      hint: "Romantic drama with Ranbir Kapoor and Deepika Padukone"
    },
    {
      word: "devdas",
      hint: "Epic romance drama starring Shah Rukh Khan"
    },
    {
      word: "koipoche",
      hint: "Romantic drama set in the backdrop of the 2002 Gujarat riots"
    },
    {
      word: "jodhaaakbar",
      hint: "Historical drama about Emperor Akbar and his queen Jodhaa"
    },
    {
      word: "tummile",
      hint: "Romantic drama set during the 2005 Mumbai floods"
    },
    {
      word: "dangal",
      hint: "Biographical sports drama based on wrestler Mahavir Singh Phogat"
    },
    {
      word: "baghban",
      hint: "Family drama starring Amitabh Bachchan and Hema Malini"
    },
    {
      word: "peeplilive",
      hint: "Satirical comedy-drama about farmer suicides"
    },
    {
      word: "karthikcallingkarthik",
      hint: "Psychological thriller with Farhan Akhtar"
    },
    {
      word: "dhamaal",
      hint: "Comedy film known for its humor and ensemble cast"
    },
    {
      word: "kaminey",
      hint: "Dark comedy thriller with Shahid Kapoor"
    },
    {
      word: "rockon",
      hint: "Musical drama about a rock band"
    },
    {
      word: "sarfarosh",
      hint: "Action thriller featuring Aamir Khan"
    },
    {
      word: "karthikcallingkarthik",
      hint: "Psychological thriller with Farhan Akhtar"
    },
    {
      word: "dhamaal",
      hint: "Comedy film known for its humor and ensemble cast"
    },
    {
      word: "kaminey",
      hint: "Dark comedy thriller with Shahid Kapoor"
    },
    {
      word: "rockon",
      hint: "Musical drama about a rock band"
    },
    {
      word: "sarfarosh",
      hint: "Action thriller featuring Aamir Khan"
    },
    {
      word: "golmaal",
      hint: "Comedy film series known for its humor"
    },
    {
      word: "khiladi",
      hint: "Action-comedy film series with Akshay Kumar"
    },
    {
      word: "dil",
      hint: "Romantic drama featuring Aamir Khan and Madhuri Dixit"
    },
    {
      word: "dhadak",
      hint: "Romantic drama and remake of the Marathi film Sairat"
    },
  ];
  