// JavaScript Document
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
function ActionChargeon() {
  document.getElementById("ActionCharge").style.display = "block";
}

function ActionChargeoff() {
  document.getElementById("ActionCharge").style.display = "none";
}
function ActionFallBackon() {
  document.getElementById("ActionFallBack").style.display = "block";
}

function ActionFallBackoff() {
  document.getElementById("ActionFallBack").style.display = "none";
}
function ActionNCRechargeon() {
  document.getElementById("ActionNCRecharge").style.display = "block";
}

function ActionNCRechargeoff() {
  document.getElementById("ActionNCRecharge").style.display = "none";
}
function ActionSneakon() {
  document.getElementById("ActionSneak").style.display = "block";
}

function ActionSneakoff() {
  document.getElementById("ActionSneak").style.display = "none";
}
function ActionHoldon() {
  document.getElementById("ActionHold").style.display = "block";
}

function ActionHoldoff() {
  document.getElementById("ActionHold").style.display = "none";
}
function ActionUGRushon() {
  document.getElementById("ActionUGRush").style.display = "block";
}

function ActionUGRushoff() {
  document.getElementById("ActionUGRush").style.display = "none";
}
function ActionOnslaughton() {
  document.getElementById("ActionOnslaught").style.display = "block";
}

function ActionOnslaughtoff() {
  document.getElementById("ActionOnslaught").style.display = "none";
}
function ActionUGPounceon() {
  document.getElementById("ActionUGPounce").style.display = "block";
}

function ActionUGPounceoff() {
  document.getElementById("ActionUGPounce").style.display = "none";
}
function ActionRushon() {
  document.getElementById("ActionRush").style.display = "block";
}

function ActionRushoff() {
  document.getElementById("ActionRush").style.display = "none";
}
function ActionRPDisrupton() {
  document.getElementById("ActionRPDisrupt").style.display = "block";
}

function ActionRPDisruptoff() {
  document.getElementById("ActionRPDisrupt").style.display = "none";
}
function ActionFuryon() {
  document.getElementById("ActionFury").style.display = "block";
}

function ActionFuryoff() {
  document.getElementById("ActionFury").style.display = "none";
}
function ActionRPRegenerateon() {
  document.getElementById("ActionRPRegenerate").style.display = "block";
}

function ActionRPRegenerateoff() {
  document.getElementById("ActionRPRegenerate").style.display = "none";
}
function ActionRPEmpoweron() {
  document.getElementById("ActionRPEmpower").style.display = "block";
}

function ActionRPEmpoweroff() {
  document.getElementById("ActionRPEmpower").style.display = "none";
}
function ActionAdvanceon() {
  document.getElementById("ActionAdvance").style.display = "block";
}

function ActionAdvanceoff() {
  document.getElementById("ActionAdvance").style.display = "none";
}
function ActionRPAnnihilateon() {
  document.getElementById("ActionRPAnnihilate").style.display = "block";
}

function ActionRPAnnihilateoff() {
  document.getElementById("ActionRPAnnihilate").style.display = "none";
}
function ActionAimon() {
  document.getElementById("ActionAim").style.display = "block";
}

function ActionAimoff() {
  document.getElementById("ActionAim").style.display = "none";
}
function ActionRapidFireon() {
  document.getElementById("ActionRapidFire").style.display = "block";
}

function ActionRapidFireoff() {
  document.getElementById("ActionRapidFire").style.display = "none";
}
function ActionAlerton() {
  document.getElementById("ActionAlert").style.display = "block";
}

function ActionAlertoff() {
  document.getElementById("ActionAlert").style.display = "none";
}
function ActionOverchargeon() {
  document.getElementById("ActionOvercharge").style.display = "block";
}

function ActionOverchargeoff() {
  document.getElementById("ActionOvercharge").style.display = "none";
}