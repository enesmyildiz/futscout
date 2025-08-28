// FutScout — online-ready (static hosting). Multi-select filters, dual age slider, detail modal.
// Dataset embedded:
const PLAYERS = [{"id": "1", "name": "Lionel Messi", "position": "FW", "age": 38, "nationality": "Argentina", "club": "Inter Miami", "value_m": 35.0, "preferred_foot": "Left", "height_cm": 170, "weight_kg": 72, "contract_until": 2025, "stats": {"apps": 32, "goals": 25, "assists": 26}, "img": "assets/players/lionel-messi.svg", "club_logo": "assets/clubs/inter-miami.svg", "flag_img": "assets/flags/ar.svg"}, {"id": "2", "name": "Cristiano Ronaldo", "position": "FW", "age": 40, "nationality": "Portugal", "club": "Al Nassr", "value_m": 25.0, "preferred_foot": "Right", "height_cm": 187, "weight_kg": 83, "contract_until": 2026, "stats": {"apps": 30, "goals": 35, "assists": 6}, "img": "assets/players/cristiano-ronaldo.svg", "club_logo": "assets/clubs/al-nassr.svg", "flag_img": "assets/flags/pt.svg"}, {"id": "3", "name": "Kylian Mbappé", "position": "FW", "age": 27, "nationality": "France", "club": "Real Madrid", "value_m": 180.0, "preferred_foot": "Right", "height_cm": 178, "weight_kg": 75, "contract_until": 2029, "stats": {"apps": 41, "goals": 44, "assists": 10}, "img": "assets/players/kylian-mbappe.svg", "club_logo": "assets/clubs/real-madrid.svg", "flag_img": "assets/flags/fr.svg"}, {"id": "4", "name": "Erling Haaland", "position": "FW", "age": 25, "nationality": "Norway", "club": "Manchester City", "value_m": 200.0, "preferred_foot": "Left", "height_cm": 194, "weight_kg": 94, "contract_until": 2028, "stats": {"apps": 41, "goals": 38, "assists": 6}, "img": "assets/players/erling-haaland.svg", "club_logo": "assets/clubs/manchester-city.svg", "flag_img": "assets/flags/no.svg"}, {"id": "5", "name": "Kevin De Bruyne", "position": "MF", "age": 34, "nationality": "Belgium", "club": "Manchester City", "value_m": 70.0, "preferred_foot": "Right", "height_cm": 181, "weight_kg": 70, "contract_until": 2026, "stats": {"apps": 34, "goals": 12, "assists": 16}, "img": "assets/players/kevin-de-bruyne.svg", "club_logo": "assets/clubs/manchester-city.svg", "flag_img": "assets/flags/be.svg"}, {"id": "6", "name": "Jude Bellingham", "position": "MF", "age": 22, "nationality": "England", "club": "Real Madrid", "value_m": 180.0, "preferred_foot": "Right", "height_cm": 186, "weight_kg": 75, "contract_until": 2029, "stats": {"apps": 41, "goals": 23, "assists": 12}, "img": "assets/players/jude-bellingham.svg", "club_logo": "assets/clubs/real-madrid.svg", "flag_img": "assets/flags/en.svg"}, {"id": "7", "name": "Vinícius Júnior", "position": "FW", "age": 25, "nationality": "Brazil", "club": "Real Madrid", "value_m": 150.0, "preferred_foot": "Right", "height_cm": 176, "weight_kg": 73, "contract_until": 2028, "stats": {"apps": 36, "goals": 24, "assists": 11}, "img": "assets/players/vinicius-junior.svg", "club_logo": "assets/clubs/real-madrid.svg", "flag_img": "assets/flags/br.svg"}, {"id": "8", "name": "Rodri", "position": "MF", "age": 29, "nationality": "Spain", "club": "Manchester City", "value_m": 110.0, "preferred_foot": "Right", "height_cm": 191, "weight_kg": 82, "contract_until": 2028, "stats": {"apps": 49, "goals": 8, "assists": 14}, "img": "assets/players/rodri.svg", "club_logo": "assets/clubs/manchester-city.svg", "flag_img": "assets/flags/es.svg"}, {"id": "9", "name": "Mohamed Salah", "position": "FW", "age": 33, "nationality": "Egypt", "club": "Liverpool", "value_m": 70.0, "preferred_foot": "Left", "height_cm": 175, "weight_kg": 71, "contract_until": 2025, "stats": {"apps": 44, "goals": 25, "assists": 13}, "img": "assets/players/mohamed-salah.svg", "club_logo": "assets/clubs/liverpool.svg", "flag_img": "assets/flags/eg.svg"}, {"id": "10", "name": "Bukayo Saka", "position": "FW", "age": 24, "nationality": "England", "club": "Arsenal", "value_m": 120.0, "preferred_foot": "Left", "height_cm": 178, "weight_kg": 72, "contract_until": 2027, "stats": {"apps": 48, "goals": 20, "assists": 12}, "img": "assets/players/bukayo-saka.svg", "club_logo": "assets/clubs/arsenal.svg", "flag_img": "assets/flags/en.svg"}, {"id": "11", "name": "Martin Ødegaard", "position": "MF", "age": 27, "nationality": "Norway", "club": "Arsenal", "value_m": 95.0, "preferred_foot": "Left", "height_cm": 178, "weight_kg": 70, "contract_until": 2028, "stats": {"apps": 45, "goals": 12, "assists": 9}, "img": "assets/players/martin-degaard.svg", "club_logo": "assets/clubs/arsenal.svg", "flag_img": "assets/flags/no.svg"}, {"id": "12", "name": "Harry Kane", "position": "FW", "age": 32, "nationality": "England", "club": "Bayern Munich", "value_m": 110.0, "preferred_foot": "Right", "height_cm": 188, "weight_kg": 86, "contract_until": 2027, "stats": {"apps": 45, "goals": 44, "assists": 12}, "img": "assets/players/harry-kane.svg", "club_logo": "assets/clubs/bayern-munich.svg", "flag_img": "assets/flags/en.svg"}, {"id": "13", "name": "Jamal Musiala", "position": "MF", "age": 22, "nationality": "Germany", "club": "Bayern Munich", "value_m": 130.0, "preferred_foot": "Right", "height_cm": 183, "weight_kg": 68, "contract_until": 2028, "stats": {"apps": 43, "goals": 19, "assists": 12}, "img": "assets/players/jamal-musiala.svg", "club_logo": "assets/clubs/bayern-munich.svg", "flag_img": "assets/flags/de.svg"}, {"id": "14", "name": "Florian Wirtz", "position": "MF", "age": 22, "nationality": "Germany", "club": "Bayer Leverkusen", "value_m": 130.0, "preferred_foot": "Right", "height_cm": 176, "weight_kg": 70, "contract_until": 2028, "stats": {"apps": 49, "goals": 18, "assists": 20}, "img": "assets/players/florian-wirtz.svg", "club_logo": "assets/clubs/bayer-leverkusen.svg", "flag_img": "assets/flags/de.svg"}, {"id": "15", "name": "Lautaro Martínez", "position": "FW", "age": 28, "nationality": "Argentina", "club": "Inter", "value_m": 120.0, "preferred_foot": "Right", "height_cm": 174, "weight_kg": 72, "contract_until": 2028, "stats": {"apps": 44, "goals": 28, "assists": 9}, "img": "assets/players/lautaro-martinez.svg", "club_logo": "assets/clubs/inter.svg", "flag_img": "assets/flags/ar.svg"}, {"id": "16", "name": "Khvicha Kvaratskhelia", "position": "FW", "age": 24, "nationality": "Georgia", "club": "Napoli", "value_m": 90.0, "preferred_foot": "Right", "height_cm": 183, "weight_kg": 70, "contract_until": 2027, "stats": {"apps": 45, "goals": 16, "assists": 14}, "img": "assets/players/khvicha-kvaratskhelia.svg", "club_logo": "assets/clubs/napoli.svg", "flag_img": "assets/flags/ge.svg"}, {"id": "17", "name": "Victor Osimhen", "position": "FW", "age": 27, "nationality": "Nigeria", "club": "Napoli", "value_m": 110.0, "preferred_foot": "Right", "height_cm": 185, "weight_kg": 78, "contract_until": 2026, "stats": {"apps": 39, "goals": 17, "assists": 4}, "img": "assets/players/victor-osimhen.svg", "club_logo": "assets/clubs/napoli.svg", "flag_img": "assets/flags/ng.svg"}, {"id": "18", "name": "Rafael Leão", "position": "FW", "age": 26, "nationality": "Portugal", "club": "AC Milan", "value_m": 90.0, "preferred_foot": "Right", "height_cm": 188, "weight_kg": 81, "contract_until": 2028, "stats": {"apps": 45, "goals": 15, "assists": 11}, "img": "assets/players/rafael-leao.svg", "club_logo": "assets/clubs/ac-milan.svg", "flag_img": "assets/flags/pt.svg"}, {"id": "19", "name": "Federico Valverde", "position": "MF", "age": 27, "nationality": "Uruguay", "club": "Real Madrid", "value_m": 120.0, "preferred_foot": "Right", "height_cm": 182, "weight_kg": 78, "contract_until": 2028, "stats": {"apps": 50, "goals": 8, "assists": 10}, "img": "assets/players/federico-valverde.svg", "club_logo": "assets/clubs/real-madrid.svg", "flag_img": "assets/flags/uy.svg"}, {"id": "20", "name": "Pedri", "position": "MF", "age": 23, "nationality": "Spain", "club": "Barcelona", "value_m": 100.0, "preferred_foot": "Right", "height_cm": 174, "weight_kg": 60, "contract_until": 2026, "stats": {"apps": 36, "goals": 4, "assists": 6}, "img": "assets/players/pedri.svg", "club_logo": "assets/clubs/barcelona.svg", "flag_img": "assets/flags/es.svg"}, {"id": "21", "name": "Gavi", "position": "MF", "age": 21, "nationality": "Spain", "club": "Barcelona", "value_m": 90.0, "preferred_foot": "Right", "height_cm": 173, "weight_kg": 70, "contract_until": 2026, "stats": {"apps": 27, "goals": 2, "assists": 4}, "img": "assets/players/gavi.svg", "club_logo": "assets/clubs/barcelona.svg", "flag_img": "assets/flags/es.svg"}, {"id": "22", "name": "Robert Lewandowski", "position": "FW", "age": 37, "nationality": "Poland", "club": "Barcelona", "value_m": 25.0, "preferred_foot": "Right", "height_cm": 185, "weight_kg": 81, "contract_until": 2026, "stats": {"apps": 49, "goals": 26, "assists": 8}, "img": "assets/players/robert-lewandowski.svg", "club_logo": "assets/clubs/barcelona.svg", "flag_img": "assets/flags/pl.svg"}, {"id": "23", "name": "Bernardo Silva", "position": "MF", "age": 31, "nationality": "Portugal", "club": "Manchester City", "value_m": 80.0, "preferred_foot": "Left", "height_cm": 173, "weight_kg": 64, "contract_until": 2026, "stats": {"apps": 48, "goals": 11, "assists": 10}, "img": "assets/players/bernardo-silva.svg", "club_logo": "assets/clubs/manchester-city.svg", "flag_img": "assets/flags/pt.svg"}, {"id": "24", "name": "Phil Foden", "position": "MF", "age": 25, "nationality": "England", "club": "Manchester City", "value_m": 150.0, "preferred_foot": "Left", "height_cm": 171, "weight_kg": 70, "contract_until": 2027, "stats": {"apps": 52, "goals": 19, "assists": 11}, "img": "assets/players/phil-foden.svg", "club_logo": "assets/clubs/manchester-city.svg", "flag_img": "assets/flags/en.svg"}, {"id": "25", "name": "Achraf Hakimi", "position": "DF", "age": 27, "nationality": "Morocco", "club": "PSG", "value_m": 80.0, "preferred_foot": "Right", "height_cm": 181, "weight_kg": 73, "contract_until": 2026, "stats": {"apps": 45, "goals": 8, "assists": 7}, "img": "assets/players/achraf-hakimi.svg", "club_logo": "assets/clubs/psg.svg", "flag_img": "assets/flags/ma.svg"}, {"id": "26", "name": "Ousmane Dembélé", "position": "FW", "age": 28, "nationality": "France", "club": "PSG", "value_m": 60.0, "preferred_foot": "Both", "height_cm": 178, "weight_kg": 67, "contract_until": 2026, "stats": {"apps": 43, "goals": 6, "assists": 9}, "img": "assets/players/ousmane-dembele.svg", "club_logo": "assets/clubs/psg.svg", "flag_img": "assets/flags/fr.svg"}, {"id": "27", "name": "Antoine Griezmann", "position": "FW", "age": 34, "nationality": "France", "club": "Atletico Madrid", "value_m": 25.0, "preferred_foot": "Left", "height_cm": 176, "weight_kg": 73, "contract_until": 2026, "stats": {"apps": 53, "goals": 25, "assists": 7}, "img": "assets/players/antoine-griezmann.svg", "club_logo": "assets/clubs/atletico-madrid.svg", "flag_img": "assets/flags/fr.svg"}, {"id": "28", "name": "Frenkie de Jong", "position": "MF", "age": 28, "nationality": "Netherlands", "club": "Barcelona", "value_m": 85.0, "preferred_foot": "Right", "height_cm": 180, "weight_kg": 74, "contract_until": 2026, "stats": {"apps": 38, "goals": 3, "assists": 5}, "img": "assets/players/frenkie-de-jong.svg", "club_logo": "assets/clubs/barcelona.svg", "flag_img": "assets/flags/nl.svg"}, {"id": "29", "name": "Rúben Dias", "position": "DF", "age": 28, "nationality": "Portugal", "club": "Manchester City", "value_m": 90.0, "preferred_foot": "Right", "height_cm": 187, "weight_kg": 82, "contract_until": 2029, "stats": {"apps": 45, "goals": 3, "assists": 1}, "img": "assets/players/ruben-dias.svg", "club_logo": "assets/clubs/manchester-city.svg", "flag_img": "assets/flags/pt.svg"}, {"id": "30", "name": "Virgil van Dijk", "position": "DF", "age": 34, "nationality": "Netherlands", "club": "Liverpool", "value_m": 35.0, "preferred_foot": "Right", "height_cm": 193, "weight_kg": 92, "contract_until": 2025, "stats": {"apps": 48, "goals": 4, "assists": 1}, "img": "assets/players/virgil-van-dijk.svg", "club_logo": "assets/clubs/liverpool.svg", "flag_img": "assets/flags/nl.svg"}, {"id": "31", "name": "Andrew Robertson", "position": "DF", "age": 31, "nationality": "Scotland", "club": "Liverpool", "value_m": 35.0, "preferred_foot": "Left", "height_cm": 178, "weight_kg": 64, "contract_until": 2026, "stats": {"apps": 40, "goals": 2, "assists": 6}, "img": "assets/players/andrew-robertson.svg", "club_logo": "assets/clubs/liverpool.svg", "flag_img": "assets/flags/sc.svg"}, {"id": "32", "name": "Trent Alexander-Arnold", "position": "DF", "age": 27, "nationality": "England", "club": "Liverpool", "value_m": 80.0, "preferred_foot": "Right", "height_cm": 180, "weight_kg": 69, "contract_until": 2026, "stats": {"apps": 43, "goals": 3, "assists": 10}, "img": "assets/players/trent-alexander-arnold.svg", "club_logo": "assets/clubs/liverpool.svg", "flag_img": "assets/flags/en.svg"}, {"id": "33", "name": "Alisson Becker", "position": "GK", "age": 33, "nationality": "Brazil", "club": "Liverpool", "value_m": 45.0, "preferred_foot": "Right", "height_cm": 191, "weight_kg": 91, "contract_until": 2027, "stats": {"apps": 41, "goals": 0, "assists": 0}, "img": "assets/players/alisson-becker.svg", "club_logo": "assets/clubs/liverpool.svg", "flag_img": "assets/flags/br.svg"}, {"id": "34", "name": "Thibaut Courtois", "position": "GK", "age": 33, "nationality": "Belgium", "club": "Real Madrid", "value_m": 45.0, "preferred_foot": "Left", "height_cm": 199, "weight_kg": 96, "contract_until": 2026, "stats": {"apps": 12, "goals": 0, "assists": 0}, "img": "assets/players/thibaut-courtois.svg", "club_logo": "assets/clubs/real-madrid.svg", "flag_img": "assets/flags/be.svg"}, {"id": "35", "name": "Mike Maignan", "position": "GK", "age": 30, "nationality": "France", "club": "AC Milan", "value_m": 45.0, "preferred_foot": "Right", "height_cm": 191, "weight_kg": 89, "contract_until": 2026, "stats": {"apps": 40, "goals": 0, "assists": 0}, "img": "assets/players/mike-maignan.svg", "club_logo": "assets/clubs/ac-milan.svg", "flag_img": "assets/flags/fr.svg"}, {"id": "36", "name": "Kim Min-jae", "position": "DF", "age": 29, "nationality": "South Korea", "club": "Bayern Munich", "value_m": 55.0, "preferred_foot": "Right", "height_cm": 190, "weight_kg": 82, "contract_until": 2028, "stats": {"apps": 41, "goals": 1, "assists": 1}, "img": "assets/players/kim-min-jae.svg", "club_logo": "assets/clubs/bayern-munich.svg", "flag_img": "assets/flags/kr.svg"}, {"id": "37", "name": "Joshua Kimmich", "position": "MF", "age": 30, "nationality": "Germany", "club": "Bayern Munich", "value_m": 75.0, "preferred_foot": "Right", "height_cm": 177, "weight_kg": 75, "contract_until": 2025, "stats": {"apps": 46, "goals": 2, "assists": 10}, "img": "assets/players/joshua-kimmich.svg", "club_logo": "assets/clubs/bayern-munich.svg", "flag_img": "assets/flags/de.svg"}, {"id": "38", "name": "Leroy Sané", "position": "FW", "age": 29, "nationality": "Germany", "club": "Bayern Munich", "value_m": 60.0, "preferred_foot": "Left", "height_cm": 183, "weight_kg": 75, "contract_until": 2025, "stats": {"apps": 45, "goals": 12, "assists": 11}, "img": "assets/players/leroy-sane.svg", "club_logo": "assets/clubs/bayern-munich.svg", "flag_img": "assets/flags/de.svg"}, {"id": "39", "name": "João Cancelo", "position": "DF", "age": 31, "nationality": "Portugal", "club": "Barcelona", "value_m": 40.0, "preferred_foot": "Right", "height_cm": 182, "weight_kg": 74, "contract_until": 2025, "stats": {"apps": 41, "goals": 3, "assists": 5}, "img": "assets/players/joao-cancelo.svg", "club_logo": "assets/clubs/barcelona.svg", "flag_img": "assets/flags/pt.svg"}, {"id": "40", "name": "İlkay Gündoğan", "position": "MF", "age": 35, "nationality": "Germany", "club": "Barcelona", "value_m": 25.0, "preferred_foot": "Right", "height_cm": 180, "weight_kg": 80, "contract_until": 2026, "stats": {"apps": 49, "goals": 6, "assists": 8}, "img": "assets/players/ilkay-gundogan.svg", "club_logo": "assets/clubs/barcelona.svg", "flag_img": "assets/flags/de.svg"}, {"id": "41", "name": "Hakan Çalhanoğlu", "position": "MF", "age": 31, "nationality": "Turkey", "club": "Inter", "value_m": 45.0, "preferred_foot": "Right", "height_cm": 178, "weight_kg": 76, "contract_until": 2028, "stats": {"apps": 48, "goals": 13, "assists": 10}, "img": "assets/players/hakan-calhanoglu.svg", "club_logo": "assets/clubs/inter.svg", "flag_img": "assets/flags/tr.svg"}, {"id": "42", "name": "Nicolo Barella", "position": "MF", "age": 28, "nationality": "Italy", "club": "Inter", "value_m": 85.0, "preferred_foot": "Right", "height_cm": 172, "weight_kg": 68, "contract_until": 2028, "stats": {"apps": 46, "goals": 5, "assists": 8}, "img": "assets/players/nicolo-barella.svg", "club_logo": "assets/clubs/inter.svg", "flag_img": "assets/flags/it.svg"}, {"id": "43", "name": "Theo Hernandez", "position": "DF", "age": 28, "nationality": "France", "club": "AC Milan", "value_m": 70.0, "preferred_foot": "Left", "height_cm": 184, "weight_kg": 81, "contract_until": 2026, "stats": {"apps": 47, "goals": 5, "assists": 8}, "img": "assets/players/theo-hernandez.svg", "club_logo": "assets/clubs/ac-milan.svg", "flag_img": "assets/flags/fr.svg"}, {"id": "44", "name": "Mauro Icardi", "position": "FW", "age": 32, "nationality": "Argentina", "club": "Galatasaray", "value_m": 20.0, "preferred_foot": "Right", "height_cm": 181, "weight_kg": 75, "contract_until": 2026, "stats": {"apps": 49, "goals": 32, "assists": 6}, "img": "assets/players/mauro-icardi.svg", "club_logo": "assets/clubs/galatasaray.svg", "flag_img": "assets/flags/ar.svg"}, {"id": "45", "name": "Kerem Aktürkoğlu", "position": "FW", "age": 27, "nationality": "Turkey", "club": "Galatasaray", "value_m": 18.0, "preferred_foot": "Right", "height_cm": 173, "weight_kg": 68, "contract_until": 2026, "stats": {"apps": 51, "goals": 15, "assists": 10}, "img": "assets/players/kerem-akturkoglu.svg", "club_logo": "assets/clubs/galatasaray.svg", "flag_img": "assets/flags/tr.svg"}, {"id": "46", "name": "Arda Güler", "position": "MF", "age": 20, "nationality": "Turkey", "club": "Real Madrid", "value_m": 55.0, "preferred_foot": "Left", "height_cm": 176, "weight_kg": 69, "contract_until": 2029, "stats": {"apps": 17, "goals": 7, "assists": 1}, "img": "assets/players/arda-guler.svg", "club_logo": "assets/clubs/real-madrid.svg", "flag_img": "assets/flags/tr.svg"}, {"id": "47", "name": "Enes Ünal", "position": "FW", "age": 28, "nationality": "Turkey", "club": "Bournemouth", "value_m": 20.0, "preferred_foot": "Right", "height_cm": 187, "weight_kg": 80, "contract_until": 2027, "stats": {"apps": 28, "goals": 8, "assists": 2}, "img": "assets/players/enes-unal.svg", "club_logo": "assets/clubs/bournemouth.svg", "flag_img": "assets/flags/tr.svg"}, {"id": "48", "name": "Ederson", "position": "GK", "age": 32, "nationality": "Brazil", "club": "Manchester City", "value_m": 45.0, "preferred_foot": "Left", "height_cm": 188, "weight_kg": 86, "contract_until": 2026, "stats": {"apps": 45, "goals": 0, "assists": 0}, "img": "assets/players/ederson.svg", "club_logo": "assets/clubs/manchester-city.svg", "flag_img": "assets/flags/br.svg"}, {"id": "49", "name": "Bruno Fernandes", "position": "MF", "age": 31, "nationality": "Portugal", "club": "Manchester United", "value_m": 70.0, "preferred_foot": "Right", "height_cm": 179, "weight_kg": 69, "contract_until": 2026, "stats": {"apps": 52, "goals": 15, "assists": 12}, "img": "assets/players/bruno-fernandes.svg", "club_logo": "assets/clubs/manchester-united.svg", "flag_img": "assets/flags/pt.svg"}];

const $ = (s)=>document.querySelector(s);
const $$ = (s)=>Array.from(document.querySelectorAll(s));

function uniqSort(arr){ return Array.from(new Set(arr)).sort((a,b)=>a.localeCompare(b)); }
function numberFmt(x){ return '€' + x.toFixed(1) + 'm'; }

function populateFilters(){
  const nats = uniqSort(PLAYERS.map(p=>p.nationality));
  const clubs = uniqSort(PLAYERS.map(p=>p.club));
  const natSel = $('#nat'); nats.forEach(n=>{ const o=document.createElement('option'); o.value=n; o.textContent=n; natSel.appendChild(o); });
  const clubSel = $('#club'); clubs.forEach(c=>{ const o=document.createElement('option'); o.value=c; o.textContent=c; clubSel.appendChild(o); });
}

function selectedMultiple(sel){
  return Array.from(sel.selectedOptions).map(o=>o.value);
}

function apply(){
  const q = $('#q').value.trim().toLowerCase();
  const pos = $('#pos').value;
  const natArr = selectedMultiple($('#nat'));
  const clubArr = selectedMultiple($('#club'));
  const aMin = Math.min(parseInt($('#ageMin').value), parseInt($('#ageMax').value));
  const aMax = Math.max(parseInt($('#ageMin').value), parseInt($('#ageMax').value));
  const vMin = Number($('#valMin').value)||0;
  const vMax = Number($('#valMax').value)||1e9;
  const sort = $('#sort').value;

  $('#ageLbl').textContent = aMin + '–' + aMax;

  let list = PLAYERS.filter(p=>{
    if(pos && p.position!==pos) return false;
    if(natArr.length && !natArr.includes(p.nationality)) return false;
    if(clubArr.length && !clubArr.includes(p.club)) return false;
    if(!(p.age>=aMin && p.age<=aMax)) return false;
    if(!(p.value_m>=vMin && p.value_m<=vMax)) return false;
    if(q && !p.name.toLowerCase().includes(q)) return false;
    return true;
  });

  list.sort((a,b)=>{
    if(sort==='value_desc') return b.value_m - a.value_m;
    if(sort==='value_asc') return a.value_m - b.value_m;
    if(sort==='age_asc') return a.age - b.age;
    if(sort==='age_desc') return b.age - a.age;
    if(sort==='name_asc') return a.name.localeCompare(b.name);
    return 0;
  });

  renderCards(list);
}

function card(p){
  const div = document.createElement('div');
  div.className = 'cardp';
  div.innerHTML = `
    <div class="avatar"><img src="${p.img}" alt=""/></div>
    <div class="meta">
      <h4>${p.name}</h4>
      <div class="badges">
        <span class="chip">${p.position}</span>
        <span class="chip">${p.age} yaş</span>
        <span class="chip"><img class="chip-img" src="${p.flag_img}"/> ${p.nationality}</span>
        <span class="chip"><img class="chip-img" src="${p.club_logo}"/> ${p.club}</span>
      </div>
    </div>
    <div class="val">${numberFmt(p.value_m)}</div>
  `;
  div.addEventListener('click', ()=>openModal(p));
  return div;
}

function renderCards(list){
  const g = $('#cards'); g.innerHTML='';
  $('#count').textContent = list.length;
  $('#empty').hidden = list.length!==0;
  list.forEach(p=> g.appendChild(card(p)));
}

function openModal(p){
  $('#m_img').src = p.img;
  $('#m_name').textContent = p.name;
  $('#m_pos').textContent = p.position;
  $('#m_age').textContent = p.age + ' yaş';
  $('#m_nat').textContent = p.nationality;
  $('#m_flag').src = p.flag_img;
  $('#m_club').textContent = p.club;
  $('#m_clublogo').src = p.club_logo;
  $('#m_val').textContent = numberFmt(p.value_m);
  $('#m_contract').textContent = p.contract_until;
  $('#m_hw').textContent = p.height_cm + ' cm / ' + p.weight_kg + ' kg';
  $('#m_foot').textContent = p.preferred_foot;
  $('#m_stats').textContent = p.stats.apps + ' maç, ' + p.stats.goals + ' gol, ' + p.stats.assists + ' asist';
  $('#modal').hidden = false;
}
function closeModal(){
  $('#modal').hidden = true;
}

function exportCsv(){
  const rows = [['name','position','age','nationality','club','value_m']].concat(
    PLAYERS.map(p=>[p.name,p.position,String(p.age),p.nationality,p.club,String(p.value_m)])
  );
  const csv = rows.map(r=>r.map(x=>`"${String(x).replace(/"/g,'"')}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='players.csv'; a.click(); URL.revokeObjectURL(url);
}

function importJson(e){
  const f = e.target.files[0]; if(!f) return;
  const rd = new FileReader(); rd.onload = ()=>{
    try{
      const arr = JSON.parse(rd.result);
      if(!Array.isArray(arr)) throw new Error('Array bekleniyor');
      window.PLAYERS = arr;
      // rebuild dropdowns
      $('#nat').innerHTML=''; $('#club').innerHTML=''; populateFilters();
      apply();
    }catch(err){ alert('Geçersiz JSON: '+err.message); }
  }; rd.readAsText(f);
}

function boot(){
  populateFilters(); apply();
  $('#apply').addEventListener('click', apply);
  $('#clear').addEventListener('click', ()=>{ $('#q').value=''; $('#pos').value=''; $('#nat').selectedIndex=-1; $('#club').selectedIndex=-1; $('#valMin').value=''; $('#valMax').value=''; $('#ageMin').value=15; $('#ageMax').value=45; apply(); });
  $('#q').addEventListener('keydown', e=>{ if(e.key==='Enter') apply(); });
  $('#ageMin').addEventListener('input', apply);
  $('#ageMax').addEventListener('input', apply);
  $('#exportCsv').addEventListener('click', exportCsv);
  $('#importJson').addEventListener('click', ()=>document.getElementById('file').click());
  document.getElementById('file').addEventListener('change', importJson);
  $('#closeModal').addEventListener('click', closeModal);
  $('#xClose').addEventListener('click', closeModal);
}
boot();
