const milestonsData = JSON.parse(data).data;

//load course milestonesdata//

function loadMilestones() {
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestonsData
    .map(function (mileston) {
      return `<div class="milestone border-b" id="${mileston._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMileston(this,${
            mileston._id
          })"
/></div>
          <div onClick ="openMileston(this, ${mileston._id})">
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

function openMileston(milestonElement, id) {
  const currentPanel = milestonElement.parentNode.nextElementSibling;

  const shownPanel = document.querySelector(".show");

  const active = document.querySelector(".active");

  if (active && !milestonElement.classList.contains("active")) {
    active.classList.remove("active");
  }

  milestonElement.classList.toggle("active");

  if (!currentPanel.classList.contains("show") && shownPanel)
    shownPanel.classList.remove("show");

  currentPanel.classList.toggle("show");

  showMileston(id);
}

function showMileston(id) {
  const milestonImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const details = document.querySelector(".details");

  milestonImage.style.opacity = "0";
  milestonImage.src = milestonsData[id].image;
  name.innerText = milestonsData[id].name;
  details.innerText = milestonsData[id].description;
}

const milestonImage = document.querySelector(".milestoneImage");
milestonImage.onload = function () {
  this.style.opacity = "1";
};


function markMileston(checkbox, id) {
  const doneList = document.querySelector(".doneList");
  const milestonsList = document.querySelector(".milestones");

  const item = document.getElementById(id);

  if (checkbox.checked) {
    milestonsList.removeChild(item);
    doneList.appendChild(item);
  } else {
    milestonsList.appendChild(item);
    doneList.removeChild(item);
  }
}




loadMilestones();
