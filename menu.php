<style>
body {
  font-family: "Lato", sans-serif;
}
	.sidenav{
		height:100%;
		width:0;
		position:fixed;
		z-index:1;
		top:0;
		left:0;
		background-color:#111;
		overflow-x:hidden;
		transition:0.5s;
		paddingtop:60px;
    }
	.sidenav a {
		padding:8px 8px 8px 8px;
		text-decoration:none;
		font-size:20px;
		color:#000000;
		display:block;
		padding:10px;
		transition:0.3s;
		border-radius:0 10px 10px 0;
        width:85%;
	}
	.sidenav a:hover{
		color:#2A2222;
        width:90%;
	}
	.TGNav{
		background-color: rgba(255,255,255,1);
	}
	.NCNav{
		background-color: rgba(168,166,172,1);
	}
	.UGNav{
		background-color: rgba(187,186,190,1);
	}
	.SDNav{
		background-color: rgba(229,226,235,1);
	}
	.RPNav{
		background-color: rgba(215,210,230,1);
	}
	.CSMNav{
		background-color: rgba(168,166,172,1);
	}
	.CBNav{
		background-color: rgba(255,255,255,1);
	}
	.OMNav{
		background-color: rgba(229,226,235,1);
	}
	.ORNav{
		background-color: rgba(187,186,190,1);
	}
	.HomeNav{
		background-color: rgba(244,239,214,1);
	}
	.sidenav .closebtn {
  		position: absolute;
  		top: 0;
  		right: -170px;
  		font-size: 36px;
  		margin-left: 20px;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
</head>
<body>

<div id="mySidenav" class="sidenav">
  <a href="New_TG_Home.html" class="TGNav">Traitor Guardsmen</a>
  <a href="New_NC_Home.html" class="NCNav">Negavolt Cultist</a>
  <a href="New_UG_Home.html" class="UGNav">Ur-Ghul</a>
  <a href="New_SD_Home.html" class="SDNav">Spindle Drone</a>
  <a href="New_RP_Home.html" class="RPNav">Rogue Psyker</a>
  <a href="New_CSM_Home.html" class="CSMNav">Chaos Space Marine</a>
  <a href="New_CB_Home.html" class="CBNav">Chaos Beastman</a>
  <a href="New_OM_Home.html" class="OMNav">Obsidius Mallex</a>
  <a href="Other_Reference.html" class="ORNav">Other Reference</a>
  <a href="index.html" class="HomeNav">Home</a>
</div>
	
<a href="javascript:void(0)" onclick="openNav()">
	<img id="Group_797" src="Group_797.png" srcset="Group_797.png 1x, Group_797@2x.png 2x">
</a>

<script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
window.addEventListener('mouseup', function(event){
	var div = document.getElementById('mySidenav');
	if (event.target != div && event.target.parentNode != div){
        document.getElementById("mySidenav").style.width = "0";
    }
});
</script>
