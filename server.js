var http = require('http');
var playlist = '[{ "artist": "Artist Band", "album": "Caak songs", "track": "BX - Gangster love", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Amin nasnii ursgal", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Kiwi - Gun Fire", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "The Pips - Thousand One Flowers", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "3 ohin - Udahgui chi nadaas", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Daam", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Otgoo(Oneway) feat. Temuulen - Zurhend Mine Ugluug Avchraach", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bilguun - Nadad ogoogui hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Uka - Muruudul bid 2", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Erka - Ene bol hair Bohir Ertunts OST", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Belee ft. Enkuush - Uuchil hairt min", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ganzorig - Chamaig uguilne", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A sound - Dursamj busgui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Martahaasaa umnu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tatar ft. A Cool, Frankseal - Boroo", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Khurd - Bi Mongolooroo goydog", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Guys - Zurh uuchil", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "MON TA RAP - HOLIDAY ft GEE, DESANT, ERKA", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Lumino - Yasan baihnav", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "TseTse Tselmuun - 3 naiz kinonii duu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bayartsengel - Sanahdaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ochgerel - Hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Boloroo ft. Anhmaa and Namuunaa - Davhar tsohilt", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bayartsengel ft. Ulaantsetseg - Hairiin duu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hishigee ft. Angirmaa - Tal nutag", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A sound - Chin zurhnii hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hishigee - Chamd orhison hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tselmuun - Huleelt", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Guys - Zurh uuchil", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool ft. Zaya, Frankseal - Beautiful", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Lumino - Huniih", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Lumino - Tultal hii", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tulgaa - Gantshan chamdaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Soul mate - Yavah tsag bolloo", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Oyunbileg, Maraljingoo ft. Otgonjargal - Suulchiin shunu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A sound - Unexpected Answer", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Uruul deerhi myanga myangan unselt", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Outlaw - Nadaas buu holdooch", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Daisy ft. Batbold - Uulzaagui hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Otgoo - Lounge", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Rokit Bay - E tseg", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hip hop stars - Az jargal", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Uka - Bi duulahdaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Gerelchuluun ft. Iderjavhlan - Andiin setgel", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Olzii - Deep Impact-1", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Dulguun - Baby come on", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Setgeliin gund", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Uuriin gegeeneer", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hishigdalai - XXLady", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hishigdalai - Hairan", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Kiwi - Namriin boroond bi gomdson", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hishigdalai - Uchraliin egshig", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Sarantuya - Nulimsaar huchsan shunu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Egshiglen - Zuudendee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Zorigt ft. Nomin - Hamtdaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Amidral bi", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Dynamic - Ungursund", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Daisy - Neg udur", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tserensuren - Hairiin ulger", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bx - Agshin", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Jaazy - Setgel", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Naran, Lhagvaa, Amarhuu ft. Byambasuren - Hair jujig OST", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Gang - Anduud", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hishgee - Duremgui udur", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Maraljingoo - Hyazgaargui OST", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Agiimaa ft. Ganbaa - Zurh mini chamruu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Enerel ft. The Compass - Tsagiin goyo", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Salhi - Chinii Umnu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ice Top ft. Zaya - Uilah erhgui hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Extacy - Chamguigeer", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Uvliin hairiin duu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Choijoo - 1001 tsetsegs", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Munh-Erdene - Chamaas asuuya", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Rokit Bay ft. Nisvanis - Zugaatai bailaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Dulguun - 20 nas", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bayartsengel ft. Anu - Holly Dolly", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Gantulga - Urgelj hairlana", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Amarmurun - Hairiig gantshan chamaas", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Amarhuu - Bal sar shig amidral", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "3 ohin - Er hun zurhendee uildag", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Freezone - Arvan horom", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Outcry - Margaashiin naran", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hurlee - Narni unaga", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bayartsetseg - SODON AYALGUU", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "3 Buduun - Bid neg angiinhan", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Tsenher sarnii tuya", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Kiwi - Hair ni ariin ni daana", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ariuka - Hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Namuun - Buuvein tsenher delhii", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hulan- 90-eed onii huuhed", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Outlaw ft. Hishigdalai - Hair yagaad", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Namuun ft. Jijgee - Hairiin tsetserleg", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Rokit Bay ft. Uyanga - Evderhii hun", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tatar - Chiniih", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tselmuun ft. Rokit Bay - Viva Life", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tatar ft. Uka - Sanahgui yum baina", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Niciton - Ahiigaa delhii deer buulgaad ali", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Temka, Ezenmunh, Mungunsuh, Zolzaya - Tiimee amidral saihan", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Niciton - Baby", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Niciton - Terminal", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Icetop - Amidral saihan", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Chamdaa bi hairgui baihiin araggui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Choi Joo - Hurch chadahgui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Zorigt ft. Hishigdalai - Hairtai hundee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Naagii ft. Uka - Ene durlal gaihamshigtai", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Niciton - Uulen ust", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Niciton - Chi miniih", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Hairtai huniihee garluu guigeerei", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "UFO ft. Danka - Muruudliin zugt", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Daisy - Durlal yu husne ve", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bayartsengel - For You", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Sarantuya - Urlug eh", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Naidandorj - Ehiin setgel", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Sain and", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Go man- Sarnii hun", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Digital - Gandan buurahgui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "3 ohin - Gantshan chiniih", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Zorigt - Itgelt negen", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "WiGGa feat Aneon - Minii bolson chi", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Fly - Hair mini heveeree", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Amarhuu - Gertee harih zamd", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Amarhuu ft. Ariunzul - Cool Love", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Anemone - Heleegui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Sweetymotion - Gants shunu baigaagui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Anhuush, Bazuh ft. Ireedui - Oyunlag zaluus", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Namriin tuhai bodol", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "ZAYA ft. TG, Hishigdalai - Hairiin tuluu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Amarhuu ft. Agii - Nadad itge", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Mb ft. Uyral - Martiidaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Digital - Chamguigeer", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold ft. RokitBay - Uulen domog", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "KIWI - Babarada", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Mixx - Zoriulaad", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Zurhend", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Munhbat ft. Uuree - Hair gereltsen harts", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Serchmaa - Buhniig chamdaa uldeeye", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ganbaa - Zuud", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool - Tsetsegchinii huslen", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Maraljingoo - Jargaah zurhen", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hulan - Aav eej 2 mini", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Extacy - Uurd hamt baigaach eejee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bolormaa Delgermaa Oyumaa - Eejiin buuveetei horvoo", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Choinom - Zaluu nas", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Choinom - Minii shuteen", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ariuka - Setgel", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Uka - Hooson", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Naran - Chamdaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool ft. Zaya - Unetei", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Nomin Talst - Chiniih", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Uka ft. Oki - You and me", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Amaraa - Bodliin hulgaich", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Sound - Lullaby", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Sound - You cast your spell", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Naran - Aavdaa unsuulhiin jargal", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Gerelchuluun - Mongoloo sanasan setgel", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Various artists - Tsever agaar belegletsgeeye", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hayanaa - Zuvhun chiniih baij", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Serchmaa ft. Shaman - Hair bid hoyor", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Byambadelger - Chinii yavdag zamaar", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "VanSemberuu Tsetseg", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Sarantuya - Hairiin beleg", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Cool ft. Honeymoon, D45, Outlaw - Bi itgej baina", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Jack - Rashaantiin 18", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Odko - Bi yavlaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Odko - Bi tamhia tatsaar", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Anemone - Nadad muruudul bii", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Anhuush ft Bazukh and D45- Hulee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bujin - Zurhnii egshig", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Odgi - Neg l udaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Batuka - My baby", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Sync - Suulchiin honhnii duu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "MC Collection - Uulzahsan", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "All star - Minii ger buliin az jargal", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Kumo ft. Gantulga - Mongoliin neg udur", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tselmuun - Tsetserlegt uchirsan hoyor OST", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Marta - Zurhend hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hulan ft. Ganbaa - Eejee (OST)", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bobo ft.Selenge - Chiniihee dergedees", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Temuujin - Hairiin zarlan", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Sarantuya - Sonet", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Gantshan chamdaa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Anu - Gegee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ganga - Halamtsuu salhi", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tenuun - Hairtai", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tenuun - Zugaalga", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Javhlan - Bi tevchihgui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ulzii - Udur bur chamdaa hairtai", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ulzii - Busgui mini", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hulan ft. Naagii - What a wonderfull world", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Serchmaa - Nadad itgeech", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "BX ft. Maraljingoo - Dream", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Nomin Talst - Namaig", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - 4 uliral", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "MB - Usan hulgana", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Urangoo - Anhnii hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Anhuush ft. Bazuh - Nandin", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Negen zugt ft. Quiza - Facebook", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Arhi tamhi - Shine uyeiin songolt bish", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tsetse - Minii ulaanbaatar", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Barhuu ft. Boogii - Zaluu nas", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Outlaw - Shargal gunig", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Sound - Chin zurhnii hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Hulan - Neg biyenii hoyor zurh", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ansu ft. Gantulga - Zahidal", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Mino ft. Amaraa - Hatarish", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Sound - Haana baina", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Batsuh - Uvliin bodol", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tselmuun - Hair amlaach", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "MB ft. Shagai - Gerelt ireedui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Far Away - Sweet", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Martagdashgui namar - Naizuudaa sanana", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold ft. Agiimaa - Zurhen 2 alga", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Haranga - Ergeh uchral", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Taliin salhi", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Sound - Nuugdah Salhi", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "3 ohin - Delhiin yagaan zurh", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Batsuh ft. Amarhuu - Bi chamdaa itgedeg", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tugsbayar - Chi mini", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Gee ft. Jonon and Bayaraa - Minii nutgiig nadad uldee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Outlaw - Zurhen tengeriin naran", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "MC Collection - Etssiin udaa ter l ohiniig huleene", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "BX ft. Maraljingoo Tenuun Tselmuun Tsetse - Deeshee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Extacy - Miss you", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Extacy - You win", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Extacy - Chamruu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tenuun - Hamtdaa baival boloh uu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tenuun - Hudlaa daa", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Sound - Forever", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "A Sound - Uyanga", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Goo amrag", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold - Heeriin salhitai ayalguu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Digital - Amidrald tavtai moril", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Bold ft. Solongo - Hagatsaj chadah uu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ogino ft. Onon - Yaruulahgui", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Lhagvasuren - Uhaaral", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ogino - Taniltsaya", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Natso - Love", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Amaraa - Hairiin burhan", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "BX ft.Tsetse and Enerel - Lobha", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "BX - Hair baij", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Onon - Taivshiral", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Oyundari - Uchigdur", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Amarhuu ft. 3 ohin - Zurh chamruu", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "BMB - Eejdee bichsen zahidal", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Outlaw - Delhii hurtel taniar mini baharhdag", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Selenge - Hairluulj bas hairlamaar baina", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tsetse - Naiz", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tsetse - Hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Tsetse - Burte Bujin", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Ariunaa - Ul tanih emegtei", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Serchmaa ft. BX - Nuuts amrag chini boliyo", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Softcore - Tugs tuguldur", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Odko - Bi huleenee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Odko - Unuruud", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Sonor - Az jargal", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Sonor - Aav eejdee", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Lhagvasuren - Gaihamshigt yertunts", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Lhagvasuren - Hair", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Young female stars - Bi er hund hairtai OST", "URL": "/Caak songs"}, { "artist": "Artist Band", "album": "Caak songs", "track": "Asian shop - Amidrah l yostoi", "URL": "/Caak songs"}]';

function handleRequest(request, response){
	response.writeHead(200, {"Content-Type": "application/json"});
    response.end(playlist);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(8082, '0.0.0.0', function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://::%s", 8082);
});