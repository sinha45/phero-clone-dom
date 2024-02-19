const milestonsData = JSON.parse(data).data;

//load course milestonesdata//

function loadMilestones() {
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestonsData
    .map(function (mileston) {
      return `<div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div onClick ="openMileston(this)">
            <p>
              ${mileston.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
         ${mileston.modules
           .map(function (module) {
             return `<div class="module border-b">
    <p>${module.name}</p>

</div>`;
           })
           .join("")}
        </div>
      </div>`;
    })
    .join("")}`;
}

function openMileston(milestonElement) {
  const currentPanel = milestonElement.parentNode.nextElementSibling;

  const shownPanel = document.querySelector(".show");

  const active = document.querySelector(".active");

if(active && !milestonElement.classList.contains("active")){
  active.classList.remove("active");
}


  milestonElement.classList.toggle("active");

  if (!currentPanel.classList.contains("show") && shownPanel)

  shownPanel.classList.remove("show");

  currentPanel.classList.toggle("show");
}

loadMilestones();
