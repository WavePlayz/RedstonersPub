<html>

<body>
	
<input oninput="fn(this.value)"></input>
<div id="log"></div>

<script>
let s = `broken
former


RecordTypes ()
first Fi
smallest Sm
fastest Fa
smallest-possible SmP
fastest-possible FaP

first-smallest
first-fastest
first-smallest-possible
first-fastest-possible

first-smallest-fastest
first-smallest-fastest-possible
first-fastest-smallest
first-fastest-smallest-possible

smallest-first
smallest-fastest
smallest-fastest-possible
smallest-first-fastest
smallest-first-smallest-possible
smallest-first-fastest-possible


























first-smallest fism
first-fastest fifa
first-smallest-fastest fismfa
first-fastest-smallest fifasm
smallest-first smfi
smallest-fastest smfa
smallest-first-fastest smfifa
smallest-fastest-first smfafi
fastest-first fafi
fastest-smallest fasm
fastest-first-smallest fafism
fastest-smallest-first fasmfi

Feeding ()
tnt
glass gls
lamp lmp
redstone-block RB


UnknownA
stargate

Placement
centre

UnknownB ()
rail
carpet

State
always-on

Patterns ()
asdjke Pa
bar Pb
cave Pca
checkerboard Chb
corner Crn
funnel Fun
gold-play GP
pitch  Pi
sissybar Si
vault Va
vortex Vo

Arrangement []
deep
inverted inv
reversed rvs

Alignment ()
horizontal H
vertical V

Shape ()
cuboid Cub
circle Cir
right-triangle RTir
triangle Tir
regular Reg

Restrictions.Component []+
sticky-block-less SBL
sticky-piston-less SPL
gravity-block-less GBL
observer () 
    observer-less ObL
    observer-only ObO
zomba Za
zomba-plus ZaP
zombi Zi
clock-less CL
entity-less EL
juke ()
    juke-less JL
    juke-only JO
target ()
    target-less TL
    target-only TO
torch-dust-only TDO
redstone-block-only RBO


Restrictions.Wiring []+
seamless Sml
flush F
deluxe Dlx
dent-less DL
expandable () Ex
    finite-expandable FEx
    infinite-expandable IEx
hipster ()
    floor-hipster FH
    wall-hipster WH
    ceiling-hipster CH
trapdoor () Trp
    floor-trapdoor FTrp
    ceiling-trapdoor CTrp
relog-proof RP
stackable St
water-proof

UnknownC []
semi
full
super

DoorTypes ()
door
skydoor

UnknownD ()
single
duel


Misc
stairs
enchantment portal EnP
locational Lo
terracotta
`

let ar = s.split(/\n+/)

function ld (source, target) {
	let sourceLen = source .length
	let targetLen = target .length
	
	if (sourceLen === 0) return targetLen;
	if (targetLen === 0) return sourceLen;
	
	const matrix = []
	
	for (let i = 0; i <= targetLen; i++) {
		matrix[i] = [i]
		
		for (let j = 1; j <= sourceLen; j++) {
			if (i == 0) {
				matrix[i][j] = j
			}
			else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j] + 1,
					matrix[i][j - 1] + 1,
					matrix[i - 1][j - 1] + (source[j - 1] === target[i - 1] ? 0 : 1)
				)
			}
		}
	}
	return matrix[ targetLen ][ sourceLen ]
}

function mm (a,b){
let n = 0

for (let i = 0, j = 0; i < a.length; i++) {
	let c = a[i]
	for (let k = j; k < b.length; k++) {
		let cc = b[k]
		
		if (c!=cc) {
			if (k == b.length-1) {
				i = a.length
				n = 0
				break
			}
			continue;
		}
		
		j = k
		n++
		break
	}
}
return n
}


let fn = (v) => {
let i = (v ?? prompt()).replace(/\s+/g,'-')
let l = null
let o = []
ar.forEach(v => {
	if (!v) return;
	v = v.trim().split(/\s+/)[0]
	
	let q = mm(i,v)
	if (!q) return;
	let p = ld(i,v) 
	
	let n = p / q
	console.log(i,v,p,q, n )
	if (!l || n < l) {
		o = []
		l = n
	};
	if (n == l) o.push(v);
}) 
console.log(o)
log.innerHTML = o.join("<br>")
//setTimeout(fn,100)
}
//fn()
</script>
</body>
</html>