var introBlocks = [
	{
		'id':'pallet',
		'left':50,
		'top':0,
		'width':32,
		'm_left':50,
		'm_top':15,
		'm_width':80
	},{
		'id':'zcash',
		'left':18,
		'top':115,
		'width':14,
		'm_left':30,
		'm_top':77,
		'm_width':35,
	},{
		'id':'litecoin',
		'left':33,
		'top':104,
		'width':14,
		'm_left':83,
		'm_top':95,
		'm_width':30,
	},{
		'id':'ethereum',
		'left':47,
		'top':130,
		'width':14,
		'm_left':17,
		'm_top':95,
		'm_width':30,
	},{
		'id':'bitcoin',
		'left':64,
		'top':120,
		'width':14,
		'm_left':50,
		'm_top':95,
		'm_width':30,
	},{
		'id':'iota',
		'left':82,
		'top':104,
		'width':14,
		'm_left':70,
		'm_top':77,
		'm_width':35,
	},{
		'id':'security',
		'left':22,
		'top':-30,
		'width':20,
		'm_left':25,
		'm_top':53,
		'm_width':50
	},{
		'id':'scalability',
		'left':82,
		'top':8,
		'width':20,
		'm_left':75,
		'm_top':50,
		'm_width':50,
	},{
		'id':'blank3',
		'left':16,
		'top':40,
		'width':9,
		'm_left':16,
		'm_top':40,
		'm_width':9,
	},{
		'id':'trans1',
		'left':33,
		'top':32,
		'width':11,
		'm_left':33,
		'm_top':32,
		'm_width':11,
	}
	,{
		'id':'trans2',
		'left':80,
		'top':45,
		'width':4,
		'm_left':80,
		'm_top':45,
		'm_width':4,
	}
	,{
		'id':'trans3',
		'left':64,
		'top':93,
		'width':11,
		'm_left':64,
		'm_top':93,
		'm_width':11,
	}
	,{
		'id':'trans4',
		'left':24.5,
		'top':97,
		'width':4,
		'm_left':24.5,
		'm_top':97,
		'm_width':4,
	}
]

var howBlocks = [
	{
		'id':'contract',
		'left':73,
		'top':56,
		'width':28,
		'm_left':50,
		'm_top':31,
		'm_width':62,
	},{
		'id':'exchange',
		'left':24,
		'top':69,
		'width':28,
		'm_left':50,
		'm_top':58.5,
		'm_width':65,
	},{
		'id':'decentralize',
		'left':51,
		'top':77,
		'width':28,
		'm_left':50,
		'm_top':88,
		'm_width':72,
	},{
		'id':'howzcash',
		'left':39,
		'top':53,
		'width':10,
		'm_left':15,
		'm_top':44,
		'm_width':22,
	},{
		'id':'howlitecoin',
		'left':80,
		'top':85,
		'width':10,
		'm_left':85,
		'm_top':44,
		'm_width':22,
	},{
		'id':'howethereum',
		'left':68,
		'top':95,
		'width':10,
		'm_left':15,
		'm_top':72,
		'm_width':22,
	},{
		'id':'howbitcoin',
		'left':29,
		'top':99,
		'width':10,
		'm_left':85,
		'm_top':72,
		'm_width':22,
	},{
		'id':'trans5',
		'left':7,
		'top':50,
		'width':4,
		'm_left':7,
		'm_top':50,
		'm_width':4,
	},{
		'id':'trans6',
		'left':53,
		'top':52,
		'width':4,
		'm_left':53,
		'm_top':52,
		'm_width':4,
	},{
		'id':'trans7',
		'left':61,
		'top':60,
		'width':13,
		'm_left':61,
		'm_top':60,
		'm_width':13,
	},{
		'id':'trans8',
		'left':85,
		'top':63,
		'width':28,
		'm_left':85,
		'm_top':63,
		'm_width':28,
	},{
		'id':'trans9',
		'left':12,
		'top':77,
		'width':28,
		'm_left':12,
		'm_top':77,
		'm_width':28,
	},{
		'id':'trans10',
		'left':44,
		'top':95,
		'width':12,
		'm_left':44,
		'm_top':95,
		'm_width':12,
	}
]

function generateHexBlocks(src){
	if (mobile){
		src.forEach(function(e,i,a){
			let hexElement = $('#' + e.id + '-block')
			let innerElement

			innerElement = $n('div','','left')
			innerElement.style.borderTopWidth    = e.m_width*0.433 + 'vw'
			innerElement.style.borderBottomWidth = e.m_width*0.433 + 'vw'
			innerElement.style.borderRightWidth  = e.m_width*0.250 + 'vw'
			hexElement.apnd(innerElement)

			innerElement = $n('div','','mid')
			hexElement.apnd(innerElement)

			innerElement = $n('div','','right')
			innerElement.style.borderTopWidth    = e.m_width*0.433 + 'vw'
			innerElement.style.borderBottomWidth = e.m_width*0.433 + 'vw'
			innerElement.style.borderLeftWidth   = e.m_width*0.250 + 'vw'
			hexElement.apnd(innerElement)

			hexElement.style.width  = e.m_width       + 'vw'
			hexElement.style.height = e.m_width*0.866 + 'vw'
			hexElement.style.left = 'calc(' + e.m_left + '% - ' + e.m_width*0.500 + 'vw)'
			hexElement.style.top  = 'calc(' + e.m_top  + '% - ' + e.m_width*0.433 + 'vw)'
		})
	}
	else {
		src.forEach(function(e,i,a){
			let hexElement = $('#' + e.id + '-block')
			let innerElement

			innerElement = $n('div','','left')
			innerElement.style.borderTopWidth    = e.width*0.433 + 'vw'
			innerElement.style.borderBottomWidth = e.width*0.433 + 'vw'
			innerElement.style.borderRightWidth  = e.width*0.250 + 'vw'
			hexElement.apnd(innerElement)

			innerElement = $n('div','','mid')
			hexElement.apnd(innerElement)

			innerElement = $n('div','','right')
			innerElement.style.borderTopWidth    = e.width*0.433 + 'vw'
			innerElement.style.borderBottomWidth = e.width*0.433 + 'vw'
			innerElement.style.borderLeftWidth   = e.width*0.250 + 'vw'
			hexElement.apnd(innerElement)

			hexElement.style.width  = e.width       + 'vw'
			hexElement.style.height = e.width*0.866 + 'vw'
			hexElement.style.left = 'calc(' + e.left + '% - ' + e.width*0.500 + 'vw)'
			hexElement.style.top  = 'calc(' + e.top  + '% - ' + e.width*0.433 + 'vw)'
		})
	}
}