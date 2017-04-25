window.onload = function(){


var dict = [{key: "51MP2691/adams-amy", name: "Adams, Amy", party:"NationalParty", electorate: "Selwyn"}, {key: "51MP3011/ardern-jacinda", name: "Ardern, Jacinda", party:"LabourParty", electorate: "Mt Albert"}, {key: "51MP2831/bakshi-kanwaljit-singh", name: "Bakshi, Kanwaljit Singh", party:"NationalParty", electorate: "List"}, {key: "51MP3551/ball-darroch", name: "Ball, Darroch", party:"NZ First", electorate: "List"}, {key: "51MP3471/barclay-todd", name: "Barclay, Todd", party:"NationalParty", electorate: "Clutha-Southland"}, {key: "51MP3121/barry-maggie", name: "Barry, Maggie", party:"NationalParty", electorate: "North Shore"}, {key: "51MP3501/bayly-andrew", name: "Bayly, Andrew", party:"NationalParty", electorate: "Hunua"}, {key: "51MP2511/bennett-paula", name: "Bennett,  Paula", party:"NationalParty", electorate: "Upper Harbour"}, {key: "51MP2331/bennett-david", name: "Bennett, David", party:"NationalParty", electorate: "Hamilton East"}, {key: "51MP3601/bindra-mahesh", name: "Bindra, Mahesh", party:"NZ First", electorate: "List"}, {key: "51MP3531/bishop-chris", name: "Bishop, Chris", party:"NationalParty", electorate: "List"}, {key: "51MP3681/bond-ria", name: "Bond, Ria", party:"NZ First", electorate: "List"}, {key: "51MP2421/borrows-chester", name: "Borrows, Chester", party:"NationalParty", electorate: "Whanganui"}, {key: "51MP2701/bridges-simon", name: "Bridges, Simon", party:"NationalParty", electorate: "Tauranga"}, {key: "51MP3131/browning-steffan", name: "Browning, Steffan", party:"GreenParty", electorate: "List"}, {key: "51MP141/brownlee-gerry", name: "Brownlee, Gerry", party:"NationalParty", electorate: "Ilam"}, {key: "51MP171/carter-david", name: "Carter, David", party:"NationalParty", electorate: "List"}, {key: "51MP3141/clark-david", name: "Clark, David", party:"LabourParty", electorate: "Dunedin North"}, {key: "51MP3061/clendon-david", name: "Clendon, David", party:"GreenParty", electorate: "List"}, {key: "51MP3711/coates-barry", name: "Coates, Barry", party:"GreenParty", electorate: "List"}, {key: "51MP2361/coleman-jonathan", name: "Coleman, Jonathan", party:"NationalParty", electorate: "Northcote"}, {key: "51MP2021/collins-judith", name: "Collins, Judith", party:"NationalParty", electorate: "Papakura"}, {key: "51MP1591/cosgrove-clayton", name: "Cosgrove, Clayton", party:"LabourParty", electorate: "List"}, {key: "51MP2711/curran-clare", name: "Curran, Clare", party:"LabourParty", electorate: "Dunedin South"}, {key: "51MP3701/davidson-marama", name: "Davidson, Marama", party:"GreenParty", electorate: "List"}, {key: "51MP3431/davis-kelvin", name: "Davis, Kelvin", party:"LabourParty", electorate: "Te Tai Tokerau"}, {key: "51MP2371/dean-jacqui", name: "Dean, Jacqui", party:"NationalParty", electorate: "Waitaki"}, {key: "51MP3001/delahunty-catherine", name: "Delahunty, Catherine", party:"GreenParty", electorate: "List"}, {key: "51MP3611/doocey-matt", name: "Doocey, Matt", party:"NationalParty", electorate: "Waimakariri"}, {key: "51MP3631/dowie-sarah", name: "Dowie, Sarah", party:"NationalParty", electorate: "Invercargill"}, {key: "51MP271/dunne-peter", name: "Dunne, Peter", party:"United Future, Ōhāriu"}, {key: "51MP291/dyson-ruth", name: "Dyson, Ruth", party:"LabourParty", electorate: "Port Hills"},{key: "51MP3091/faafoi-kris", name: "Faafoi, Kris", party:"LabourParty", electorate: "Mana"}, {key: "51MP2541/finlayson-christopher", name: "Finlayson, Christopher", party:"NationalParty", electorate: "List"}, {key: "51MP2451/flavell-te-ururoa", name: "Flavell, Te Ururoa", party:"MaoriParty", electorate: "Waiariki"}, {key: "51MP2401/foss-craig", name: "Foss, Craig", party:"NationalParty", electorate: "Tukituki"}, {key: "51MP3381/foster-bell-paul", name: "Foster-Bell, Paul", party:"NationalParty", electorate: "List"}, {key: "51MP3451/fox-marama", name: "Fox, Marama", party:"MaoriParty", electorate: "List"}, {key: "51MP3151/genter-julie-anne", name: "Genter, Julie Anne", party:"GreenParty", electorate: "List"}, {key: "51MP3161/goldsmith-paul", name: "Goldsmith, Paul", party:"NationalParty", electorate: "List"}, {key: "51MP2321/goodhew-jo", name: "Goodhew, Jo", party:"NationalParty", electorate: "Rangitata"}, {key: "51MP3031/graham-kennedy", name: "Graham, Kennedy", party:"GreenParty", electorate: "List"}, {key: "51MP2561/guy-nathan", name: "Guy, Nathan", party:"NationalParty", electorate: "Ōtaki"}, {key: "51MP3411/hayes-joanne", name: "Hayes, Joanne", party:"NationalParty", electorate: "List"}, {key: "51MP3461/henare-peeni", name: "Henare, Peeni", party:"LabourParty", electorate: "Tāmaki Makaurau"}, {key: "51MP2871/hipkins-chris", name: "Hipkins, Chris", party:"LabourParty", electorate: "Rimutaka"}, {key: "51MP3521/hudson-brett", name: "Hudson, Brett", party:"NationalParty", electorate: "List"}, {key: "51MP3071/hughes-gareth", name: "Hughes, Gareth", party:"GreenParty", electorate: "List"}, {key: "51MP2911/huo-raymond", name: "Huo, Raymond", party:"LabourParty", electorate: "List"}, {key: "51MP2681/joyce-steven", name: "Joyce, Steven", party:"NationalParty", electorate: "List"}, {key: "51MP2731/kaye-nikki", name: "Kaye, Nikki", party:"NationalParty", electorate: "Auckland Central"}, {key: "51MP581/king-annette", name: "King, Annette", party:"LabourParty", electorate: "Rongotai"}, {key: "51MP3621/korako-tutehounuku-nuk", name: "Korako, Tutehounuku (Nuk)", party:"NationalParty", electorate: "List"}, {key: "51MP3511/kuriger-barbara", name: "Kuriger, Barbara", party:"NationalParty", electorate: "Taranaki-King Country"}, {key: "51MP2741/lee-melissa", name: "Lee, Melissa", party:"NationalParty", electorate: "List"}, {key: "51MP2751/lees-galloway-iain", name: "Lees-Galloway, Iain", party:"LabourParty", electorate: "Palmerston North"}, {key: "51MP3181/little-andrew", name: "Little, Andrew", party:"LabourParty", electorate: "List"}, {key: "51MP3191/logie-jan", name: "Logie, Jan", party:"GreenParty", electorate: "List"}, {key: "51MP2761/lotu-iiga-peseta-sam", name: "Lotu-Iiga, Peseta Sam", party:"NationalParty", electorate: "Maungakiekie"}, {key: "51MP2921/macindoe-tim", name: "Macindoe, Tim", party:"NationalParty", electorate: "Hamilton West"}, {key: "51MP661/mahuta-nanaia", name: "Mahuta, Nanaia", party:"LabourParty", electorate: "Hauraki-Waikato"}, {key: "51MP671/mallard-trevor", name: "Mallard, Trevor", party:"LabourParty", electorate: "Hutt South"}, {key: "51MP691/mark-ron", name: "Mark, Ron", party:"NZ First", electorate: "List"}, {key: "51MP3211/martin-tracey", name: "Martin, Tracey", party:"NZ First", electorate: "List"}, {key: "51MP3261/mathers-mojo", name: "Mathers, Mojo", party:"GreenParty", electorate: "List"}, {key: "51MP2801/mcclay-todd", name: "McClay, Todd", party:"NationalParty", electorate: "Rotorua"}, {key: "51MP731/mccully-murray", name: "McCully, Murray", party:"NationalParty", electorate: "East Coast Bays"}, {key: "51MP3271/mckelvie-ian", name: "McKelvie, Ian", party:"NationalParty", electorate: "Rangitikei"}, {key: "51MP3541/mitchell-clayton", name: "Mitchell, Clayton", party:"NZ First", electorate: "List"}, {key: "51MP3281/mitchell-mark", name: "Mitchell, Mark", party:"NationalParty", electorate: "Rodney"}, {key: "51MP2481/moroney-sue", name: "Moroney, Sue", party:"LabourParty", electorate: "List"}, {key: "51MP3651/muller-todd", name: "Muller, Todd", party:"NationalParty", electorate: "Bay of Plenty"}, {key: "51MP2931/nash-stuart", name: "Nash, Stuart", party:"LabourParty", electorate: "Napier"}, {key: "51MP3591/naylor-jono", name: "Naylor, Jono", party:"NationalParty", electorate: "List"}, {key: "51MP3291/ngaro-alfred", name: "Ngaro, Alfred", party:"NationalParty", electorate: "List"}, {key: "51MP831/oconnor-damien", name: "O&#39;Connor, Damien", party:"LabourParty", electorate: "West Coast-Tasman"}, {key: "51MP3301/oconnor-simon", name: "O&#39;Connor, Simon", party:"NationalParty", electorate: "Tāmaki"}, {key: "51MP3311/orourke-denis", name: "O&#39;Rourke, Denis", party:"NZ First", electorate: "List"}, {key: "51MP2141/paraone-pita", name: "Paraone, Pita", party:"NZ First", electorate: "List"}, {key: "51MP2941/parata-hekia", name: "Parata, Hekia", party:"NationalParty", electorate: "List"}, {key: "51MP2151/parker-david", name: "Parker, David", party:"LabourParty", electorate: "List"}, {key: "51MP3661/parmar-parmjeet", name: "Parmar, Parmjeet", party:"NationalParty", electorate: "List"}, {key: "51MP861/peters-winston", name: "Peters, Winston", party:"NZ First", electorate: "Northland"}, {key: "51MP3221/prosser-richard", name: "Prosser, Richard", party:"NZ First", electorate: "List"}, {key: "51MP3691/pugh-maureen", name: "Pugh, Maureen", party:"NationalParty", electorate: "List"}, {key: "51MP3671/reti-shane", name: "Reti, Shane", party:"NationalParty", electorate: "Whangarei"}, {key: "51MP2811/robertson-grant", name: "Robertson, Grant", party:"LabourParty", electorate: "Wellington Central"}, {key: "51MP3231/roche-denise", name: "Roche, Denise", party:"GreenParty", electorate: "List"}, {key: "51MP3101/ross-jami-lee", name: "Ross, Jami-Lee", party:"NationalParty", electorate: "Botany"}, {key: "51MP3481/rurawhe-adrian", name: "Rurawhe, Adrian", party:"LabourParty", electorate: "Te Tai Hauāuru"}, {key: "51MP3251/sage-eugenie", name: "Sage, Eugenie", party:"GreenParty", electorate: "List"}, {key: "51MP3581/salesa-jenny", name: "Salesa, Jenny", party:"LabourParty", electorate: "Manukau East"}, {key: "51MP3491/scott-alastair", name: "Scott, Alastair", party:"NationalParty", electorate: "Wairarapa"}, {key: "51MP2971/sepuloni-carmel", name: "Sepuloni, Carmel", party:"LabourParty", electorate: "Kelston"}, {key: "51MP3441/seymour-david", name: "Seymour, David", party:"ACT New Zealand", electorate: "Epsom"}, {key: "51MP3571/shaw-james", name: "Shaw, James", party:"GreenParty", electorate: "List"}, {key: "51MP3321/simpson-scott", name: "Simpson, Scott", party:"NationalParty", electorate: "Coromandel"}, {key: "51MP2661/sio-aupito-william", name: "Sio, Aupito William", party:"LabourParty", electorate: "Māngere"}, {key: "51MP1021/smith-nick", name: "Smith, Nick", party:"NationalParty", electorate: "Nelson"}, {key: "51MP3641/smith-stuart", name: "Smith, Stuart", party:"NationalParty", electorate: "Kaikōura"}, {key: "51MP2211/stewart-barbara", name: "Stewart, Barbara", party:"NZ First", electorate: "List"}, {key: "51MP3561/tabuteau-fletcher", name: "Tabuteau, Fletcher", party:"NZ First", electorate: "List"}, {key: "51MP3371/tirikatene-rino", name: "Tirikatene, Rino", party:"LabourParty", electorate: "Te Tai Tonga"}, {key: "51MP1801/tisch-lindsay", name: "Tisch, Lindsay", party:"NationalParty", electorate: "Waikato"}, {key: "51MP1811/tolley-anne", name: "Tolley, Anne", party:"NationalParty", electorate: "East Coast"}, {key: "51MP2221/turei-metiria", name: "Turei, Metiria", party:"GreenParty", electorate: "List"}, {key: "51MP2981/twyford-phil", name: "Twyford, Phil", party:"LabourParty", electorate: "Te Atatū"}, {key: "51MP2781/upston-louise", name: "Upston, Louise", party:"NationalParty", electorate: "Taupō"}, {key: "51MP2571/wagner-nicky", name: "Wagner, Nicky", party:"NationalParty", electorate: "Christchurch Central"}, {key: "51MP2651/wall-louisa", name: "Wall, Louisa", party:"LabourParty", electorate: "Manurewa"}, {key: "51MP3401/whaitiri-meka", name: "Whaitiri, Meka", party:"LabourParty", electorate: "Ikaroa-Rāwhiti"}, {key: "51MP3421/williams-poto", name: "Williams, Poto", party:"LabourParty", electorate: "Christchurch East"}, {key: "51MP1151/williamson-maurice", name: "Williamson, Maurice", party:"NationalParty", electorate: "Pakuranga"}, {key: "51MP3731/wood-michael", name: "Wood, Michael", party:"LabourParty", electorate: "Mt Roskill"}, {key: "51MP2991/woodhouse-michael", name: "Woodhouse, Michael", party:"NationalParty", electorate: "List"}, {key: "51MP3351/woods-megan", name: "Woods, Megan", party:"LabourParty", electorate: "Wigram"}, {key: "51MP3361/yang-jian", name: "Yang, Jian", party:"NationalParty", electorate: "List"}, {key: "51MP2791/young-jonathan", name: "Young, Jonathan", party:"NationalParty", electorate: "New Plymouth"} ];

var newDict =[]
for (i = 0;i < dict.length;i++){
	var Url = "https://www.parliament.nz/en/mps-and-electorates/members-of-parliament/document/" + (dict[i].key);


httpGet(Url);

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    processHtml(xmlHttp.responseText);
}

function processHtml(responseInfo){
	var emailRegex = /[a-z.]*(@parliament.govt.nz)/;

	var emailfound = responseInfo.match(emailRegex);
	//console.log(emailfound[0]);
	dict[i].email=String(emailfound[0]);


	var twitterRegex = /(twitter.com\/)[\.a-zA-Z]*/;
	var twitterFound = responseInfo.match(twitterRegex);
	if (twitterFound[0]=="twitter.com/share"){
		twitterFound[0]=="";
			dict[i].twitter="";
	}
		else{
			dict[i].twitter=String(twitterFound[0]);
		}
	// console.log(twitterFound[0]);

	var fbRegex = /(facebook.com\/)[a-z.]*/;
	var fbFound = responseInfo.match(fbRegex);
	if (String(fbFound[0]) == "facebook.com/"){
					dict[i].fb="";
	}
		else{
			dict[i].fb=String(fbFound[0]);
		}
		
	var name = dict[i].key.split("/");
	var firstNameRAW = name[1].split("-");
	var firstNameFinal = firstNameRAW[0];

	var imgRegex = new RegExp ("(\/media\/)[0-9]*(\/" + firstNameFinal +")[\-a-zA-Z0-9\.]*");

	var imgFound = responseInfo.match(imgRegex);
	if (imgFound !=null){
		var newPath = imgFound[0].split("/");
		dict[i].image=String(newPath[3]);
		
			var link = document.createElement('a');
	var linkUrl = "https://www.parliament.nz/" + imgFound[0];
link.href = linkUrl;
link.download = linkUrl;
document.body.appendChild(link);
link.click();
	}
	else{
		dict[i].image="";
	}

	newDict.push(dict[i]);
	console.log(newDict[i]);

}
}


console.log(newDict);
}