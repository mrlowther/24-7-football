const seedDb = async ()=>{
    await sequelize.sync({force: true});
    await db.Owner.bulkCreate([
        {
            playerName:"Sean Mannion",
            team: `Seattle Seahawks`,
            number:`9`,
            position:`QB`,
            height:`6'6"`,
            weight:`233`,
            college:`Oregon State`,
    
        },
        {
            playerName:`Geno Smith`,
            team: `Seattle Seahawks`,
            number:`7`,
            position:`QB`,
            height:`6'3"`,
            weight:`221`,
            college:`West Virgina`,
    
        },
        {
            
            playerName:`Russell Wilson`,
            team: `Seattle Seahawks`,
            number:`3`,
            position:`QB`,
            height:`5'11"`,
            weight:`215`,
            college:`Wisconsin`,
    
        },
        {
            playerName:`Chris Carson`,
            team: `Seattle Seahawks`,
            number:`32`,
            position:`RB`,
            height:`5'11"`,
            weight:`222`,
            college:`Oklahoma State`,
    
        },
        {
            playerName:`Alex Collins`,
            team: `Seattle Seahawks`,
            number:`41`,
            position:`RB`,
            height:`5'10'`,
            weight:`210`,
            college:`Alex Collins`,
    
        },
        {
            playerName:`DeeJay Dallas`,
            team: `Seattle Seahawks`,
            number:`31`,
            position:`RB`,
            height:`5'10"`,
            weight:`214`,
            college:`Miami(FL)`,
    
        },
        {
            playerName:`Travis Homer`,
            team: `Seattle Seahawks`,
            number:`25`,
            position:`RB`,
            height:`5'10"`,
            weight:`202`,
            college:`Miami(FL)`,
    
        },
        {
            playerName:`Rashaad Penny`,
            team: `Seattle Seahawks`,
            number:`20`,
            position:`RB`,
            height:`5'11"`,
            weight:`220`,
            college:`SanDiego State`,
    
        },
        {
            playerName:`Nick Bellore`,
            team: `Seattle Seahawks`,
            number:`44`,
            position:`FB/LB`,
            height:`6'1"`,
            weight:`250`,
            college:`Central Michigan`,
    
        },
        {
            playerName:`Dee Eskridge`,
            team: `Seattle Seahawks`,
            number:`1`,
            position:`WR`,
            height:`5'9"`,
            weight:`190`,
            college:`Western Michigan`,
    
        },
        {
            playerName:`Tyler Lockett`,
            team: `Seattle Seahawks`,
            number:`16`,
            position:`WR`,
            height:`5'10"`,
            weight:`182`,
            college:`Kansas State`,
    
        },
        {
            playerName:`DK Metcalf`,
            team: `Seattle Seahawks`,
            number:`14`,
            position:`WR`,
            height:`6'4"`,
            weight:`235`,
            college:`Ole Miss`,
    
        },
        {
            playerName:`Freddie Swain`,
            team: `Seattle Seahawks`,
            number:`18`,
            position:`WR`,
            height:`6'0"`,
            weight:`199`,
            college:`Florida`,
    
        },
        {
            playerName:`Will Dissly`,
            team: `Seattle Seahawks`,
            number:`89`,
            position:`TE`,
            height:`6'4"`,
            weight:`265`,
            college:`Washington`,
    
        },
        {
            playerName:`Gerald Everett`,
            team: `Seattle Seahawks`,
            number:`81`,
            position:`TE`,
            height:`6'3"`,
            weight:`240`,
            college:`South Alabama`,
    
        },
        {
            playerName:`Colby Parkinson`,
            team: `Seattle Seahawks`,
            number:`84`,
            position:`TE`,
            height:`6'7"`,
            weight:`251`,
            college:`Stanford`,
    
        },
        {
            playerName:`Kyle Fuller`,
            team: `Seattle Seahawks`,
            number:`61`,
            position:`C`,
            height:`6'5"`,
            weight:`320`,
            college:`Baylor`,
    
        },
        {
            playerName:`Ethan Pocic`,
            team: `Seattle Seahawks`,
            number:`77`,
            position:`C`,
            height:`6'6"`,
            weight:`320`,
            college:`LSU`,
    
        },
        {
            playerName:`Phil Haynes`,
            team: `Seattle Seahawks`,
            number:`G`,
            position:`60`,
            height:`6'4"`,
            weight:`322`,
            college:`Wake Forest`,
    
        },
        {
            playerName:`Gabe Jackson`,
            team: `Seattle Seahawks`,
            number:`66`,
            position:`G`,
            height:`6'3"`,
            weight:`335`,
            college:`Mississippi State`,
    
        },
        {
            playerName:`Damien Lewis`,
            team: `Seattle Seahawks`,
            number:`68`,
            position:`G`,
            height:`6'2"`,
            weight:`327`,
            college:`LSU`,
    
        },
        {
            playerName:`Duane Brown`,
            team: `Seattle Seahawks`,
            number:`76`,
            position:`OT`,
            height:`6'4"`,
            weight:`315`,
            college:`Virginia Tech`,
    
        },
        {
            playerName:`Jake Curhan`,
            team: `Seattle Seahawks`,
            number:`74`,
            position:`OT`,
            height:`6'6"`,
            weight:`316`,
            college:`California`,
    
        },
        {
            playerName:`Stone Forsythe`,
            team: `Seattle Seahawks`,
            number:`78`,
            position:`OT`,
            height:`6'8"`,
            weight:`307`,
            college:`Florida`,
    
        },
        {
            playerName:`Jamarco Jones`,
            team: `Seattle Seahawks`,
            number:`73`,
            position:`OT`,
            height:`6'4"`,
            weight:`293`,
            college:`Ohio State`,
    
        },
        {
            playerName:`Cedric Ogbuehi`,
            team: `Seattle Seahawks`,
            number:`70`,
            position:`OT`,
            height:`6'5"`,
            weight:`308`,
            college:`Texas A&M`,
    
        },
        {
            playerName:`Brandon Shell`,
            team: `Seattle Seahawks`,
            number:`72`,
            position:`OT`,
            height:`6'5"`,
            weight:`324`,
            college:`South Carolina`,
    
        },
        {
            playerName:`LJ Collier`,
            team: `Seattle Seahawks`,
            number:`91`,
            position:`DE`,
            height:`6'2"`,
            weight:`291`,
            college:`TCU`,
    
        },
        {
            playerName:`Carlos Dunlap`,
            team: `Seattle Seahawks`,
            number:`8`,
            position:`DE`,
            height:`6'6"`,
            weight:`285`,
            college:`Florida`,
    
        },
        {
            playerName:`Rasheem Green`,
            team: `Seattle Seahawks`,
            number:`94`,
            position:`DE`,
            height:`6'4"`,
            weight:`279`,
            college:`USC`,
    
        },
        {
            playerName:`Kerry Hyder Jr.`,
            team: `Seattle Seahawks`,
            number:`51`,
            position:`DE`,
            height:`6'2"`,
            weight:`275`,
            college:`Texas Tech`,
    
        },
        {
            playerName:`Benson Mayowa`,
            team: `Seattle Seahawks`,
            number:`95`,
            position:`DE`,
            height:`6'3"`,
            weight:`252`,
            college:`Idaho`,
    
        },
        {
            playerName:`Alton Robinson`,
            team: `Seattle Seahawks`,
            number:`98`,
            position:`DE`,
            height:`6'3"`,
            weight:`259`,
            college:`Syracuse`,
    
        },
        {
            playerName:`Darrell Taylor`,
            team: `Seattle Seahawks`,
            number:`52`,
            position:`DE`,
            height:`6'4"`,
            weight:`267`,
            college:`Tennessee`,
    
        },
        {
            playerName:`Poona Ford`,
            team: `Seattle Seahawks`,
            number:`97`,
            position:`DT`,
            height:`5'11"`,
            weight:`310`,
            college:`Texas`,
    
        },
        {
            playerName:`Bryan Mone`,
            team: `Seattle Seahawks`,
            number:`90`,
            position:`DT`,
            height:`6'3"`,
            weight:`345`,
            college:`Michigan`,
    
        },
        {
            playerName:`Al Woods`,
            team: `Seattle Seahawks`,
            number:`99`,
            position:`DT`,
            height:`6'4"`,
            weight:`330`,
            college:`LSU`,
    
        },
        {
            playerName:`Cody Barton`,
            team: `Seattle Seahawks`,
            number:`57`,
            position:`LB`,
            height:`6'2"`,
            weight:`237`,
            college:`Utah`,
    
        },
        {
            playerName:`Jordyn Brooks`,
            team: `Seattle Seahawks`,
            number:`56`,
            position:`LB`,
            height:`6'0"`,
            weight:`240`,
            college:`Texas Tech`,
    
        },
        {
            playerName:`Ben Burr-Kirven`,
            team: `Seattle Seahawks`,
            number:`55`,
            position:`LB`,
            height:`6'0"`,
            weight:`230`,
            college:`Washington`,
    
        },
        {
            playerName:`Bobby Wagner`,
            team: `Seattle Seahawks`,
            number:`54`,
            position:`LB`,
            height:`6'0"`,
            weight:`242`,
            college:`Utah State`,
    
        },
        {
            playerName:`Tre Brown`,
            team: `Seattle Seahawks`,
            number:`22`,
            position:`CB`,
            height:`5'10"`,
            weight:`185`,
            college:`Oklahoma`,
    
        },
        {
            playerName:`Tre Flowers`,
            team: `Seattle Seahawks`,
            number:`21`,
            position:`CB`,
            height:`6'3"`,
            weight:`203`,
            college:`Oklahoma State`,
    
        },
        {
            playerName:`Sidney Jones IV`,
            team: `Seattle Seahawks`,
            number:``,
            position:`CB`,
            height:`6'0"`,
            weight:`181`,
            college:`Washington`,
    
        },
        {
            playerName:`DJ Reed`,
            team: `Seattle Seahawks`,
            number:`29`,
            position:`CB`,
            height:`5'9"`,
            weight:`193`,
            college:`Kansas State`,
    
        },
        {
            playerName:`Ahkello Witherspoon`,
            team: `Seattle Seahawks`,
            number:`2`,
            position:`CB`,
            height:`6'3"`,
            weight:`195`,
            college:`Colorado`,
    
        },
        {
            playerName:`Jamal Adams`,
            team: `Seattle Seahawks`,
            number:`33`,
            position:`S`,
            height:`6'1"`,
            weight:`213`,
            college:`LSU`,
    
        },
        {
            playerName:`Ugo Amadi`,
            team: `Seattle Seahawks`,
            number:`28`,
            position:`S`,
            height:`5'9"`,
            weight:`201`,
            college:`Oregon`,
    
        },
        {
            playerName:`Marquise Blair`,
            team: `Seattle Seahawks`,
            number:`27`,
            position:`S`,
            height:`6'1"`,
            weight:`196`,
            college:`Utah`,
    
        },
        {
            playerName:`Quandre Diggs`,
            team: `Seattle Seahawks`,
            number:`6`,
            position:`S`,
            height:`5'9"`,
            weight:`197`,
            college:`Texas`,
    
        },
        {
            playerName:`Ryan Neal`,
            team: `Seattle Seahawks`,
            number:`26`,
            position:`S`,
            height:`6'3"`,
            weight:`200`,
            college:`Southern Illinois`,
    
        },

        {
            playerName:`Jason Myers`,
            team: `Seattle Seahawks`,
            number:`5`,
            position:`K`,
            height:`5'10"`,
            weight:`190`,
            college:`Marist`,
    
        },
        {
            playerName:`Michael Dickson`,
            team: `Seattle Seahawks`,
            number:`4`,
            position:`P`,
            height:`6'2"`,
            weight:`208`,
            college:`Texas`,
    
        },
        {
            playerName:`Tyler Ott`,
            team: `Seattle Seahawks`,
            number:`69`,
            position:`LS`,
            height:`6'3"`,
            weight:`253`,
            college:`Harvard`,
    
        },

    
    ])