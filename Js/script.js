const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// console.log(allFilterBtn);
// console.log(interviewFilterBtn);
// console.log(rejectedFilterBtn);

const filteredSection = document.getElementById("filtered-section");
const allJobsSection = document.getElementById("all-jobs-cards");

// console.log(filteredSection);
// console.log(noJobsMsg);
// console.log(allJobsSection);

allFilterBtn.addEventListener("click", function () {
  allFilterBtn.classList.remove("bg-base-200");
  allFilterBtn.classList.add("bg-primary", "text-white");

  interviewFilterBtn.classList.remove("bg-primary", "text-white");
  interviewFilterBtn.classList.add("bg-base-200");

  rejectedFilterBtn.classList.remove("bg-primary", "text-white");
  rejectedFilterBtn.classList.add("bg-base-200");

  allJobsSection.classList.remove("hidden");
  filteredSection.classList.add("hidden");

  console.log(allFilterBtn);
});

interviewFilterBtn.addEventListener("click", function () {
  //   console.log("Show the interview Filter Button");

  interviewFilterBtn.classList.remove("bg-base-200");
  interviewFilterBtn.classList.add("bg-primary", "text-white");

  allFilterBtn.classList.remove("bg-primary", "text-white");
  allFilterBtn.classList.add("bg-base-200");

  rejectedFilterBtn.classList.remove("bg-primary", "text-white");
  rejectedFilterBtn.classList.add("bg-base-200");

  //   console.log(interviewFilterBtn);

  allJobsSection.classList.add("hidden");
  filteredSection.classList.remove("hidden");
});

rejectedFilterBtn.addEventListener("click", function () {
  //   console.log("Show reject filter button");

  rejectedFilterBtn.classList.remove("bg-base-200");
  rejectedFilterBtn.classList.add("bg-primary", "text-white");

  allFilterBtn.classList.remove("bg-primary", "text-white");
  allFilterBtn.classList.add("bg-base-200");

  interviewFilterBtn.classList.remove("bg-primary", "text-white");
  interviewFilterBtn.classList.add("bg-base-200");

  //   console.log(allFilterBtn);

  allJobsSection.classList.add("hidden");
  filteredSection.classList.remove("hidden");
});
