// ================================
// SA TECH JOBS — JavaScript
// jobs.js
// ================================


// ---- JOB DATA ----
// Each job is an object with named properties.
// This is our "database" — in a real app this
// would come from a server, but for a portfolio
// project storing it here works perfectly.

var jobs = [
  {
    id: 1,
    title: "Junior Frontend Developer",
    company: "OfferZen",
    logo: "OZ",
    logoColor: "#38bdf8",
    city: "Cape Town",
    workType: "Remote",
    level: "Junior",
    salary: "R18k–R25k/mo",
    salaryValue: 25000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    posted: "2 days ago",
    featured: true,
    url: "https://www.offerzen.com"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Discovery Health",
    logo: "DH",
    logoColor: "#4ade80",
    city: "Johannesburg",
    workType: "Hybrid",
    level: "Mid",
    salary: "R35k–R45k/mo",
    salaryValue: 45000,
    skills: ["React", "TypeScript", "CSS", "Git"],
    posted: "1 day ago",
    featured: true,
    url: "https://www.discovery.co.za/careers"
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Takealot",
    logo: "TL",
    logoColor: "#f87171",
    city: "Cape Town",
    workType: "On-site",
    level: "Junior",
    salary: "R15k–R22k/mo",
    salaryValue: 22000,
    skills: ["HTML", "CSS", "JavaScript", "Vue"],
    posted: "3 days ago",
    featured: false,
    url: "https://www.takealot.com/about/careers"
  },
  {
    id: 4,
    title: "UI Developer",
    company: "Standard Bank",
    logo: "SB",
    logoColor: "#fbbf24",
    city: "Johannesburg",
    workType: "Hybrid",
    level: "Mid",
    salary: "R40k–R55k/mo",
    salaryValue: 55000,
    skills: ["Angular", "CSS", "TypeScript", "Figma"],
    posted: "5 days ago",
    featured: false,
    url: "https://jobs.standardbank.com"
  },
  {
    id: 5,
    title: "Junior React Developer",
    company: "Yoco",
    logo: "YC",
    logoColor: "#38bdf8",
    city: "Cape Town",
    workType: "Remote",
    level: "Junior",
    salary: "R20k–R28k/mo",
    salaryValue: 28000,
    skills: ["React", "JavaScript", "CSS", "REST APIs"],
    posted: "Today",
    featured: true,
    url: "https://www.yoco.com/za/careers"
  },
  {
    id: 6,
    title: "Web Designer and Developer",
    company: "FNB",
    logo: "FN",
    logoColor: "#4ade80",
    city: "Johannesburg",
    workType: "Hybrid",
    level: "Junior",
    salary: "R18k–R26k/mo",
    salaryValue: 26000,
    skills: ["HTML", "CSS", "JavaScript", "Figma"],
    posted: "1 week ago",
    featured: false,
    url: "https://www.fnb.co.za/about-fnb/careers.html"
  },
  {
    id: 7,
    title: "Senior Frontend Engineer",
    company: "Luno",
    logo: "LN",
    logoColor: "#a78bfa",
    city: "Cape Town",
    workType: "Remote",
    level: "Senior",
    salary: "R70k–R95k/mo",
    salaryValue: 95000,
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    posted: "4 days ago",
    featured: false,
    url: "https://www.luno.com/en/careers"
  },
  {
    id: 8,
    title: "Frontend Developer Entry Level",
    company: "Vodacom",
    logo: "VC",
    logoColor: "#f87171",
    city: "Pretoria",
    workType: "On-site",
    level: "Junior",
    salary: "R16k–R24k/mo",
    salaryValue: 24000,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    posted: "2 days ago",
    featured: false,
    url: "https://www.vodacom.co.za/vodacom/careers"
  },
  {
    id: 9,
    title: "CSS and UI Specialist",
    company: "Mama Money",
    logo: "MM",
    logoColor: "#fbbf24",
    city: "Pretoria",
    workType: "Hybrid",
    level: "Mid",
    salary: "R30k–R40k/mo",
    salaryValue: 40000,
    skills: ["CSS", "Tailwind", "JavaScript", "React"],
    posted: "6 days ago",
    featured: false,
    url: "https://www.mamamoney.co.za"
  },
  {
    id: 10,
    title: "Junior Frontend Dev",
    company: "Peach Payments",
    logo: "PP",
    logoColor: "#4ade80",
    city: "Durban",
    workType: "Remote",
    level: "Junior",
    salary: "R17k–R23k/mo",
    salaryValue: 23000,
    skills: ["HTML", "CSS", "Vue", "Git"],
    posted: "Today",
    featured: false,
    url: "https://www.peachpayments.com"
  },
  {
    id: 11,
    title: "Senior UI and UX Developer",
    company: "Naspers",
    logo: "NP",
    logoColor: "#38bdf8",
    city: "Cape Town",
    workType: "Hybrid",
    level: "Senior",
    salary: "R80k–R110k/mo",
    salaryValue: 110000,
    skills: ["React", "Figma", "TypeScript", "CSS"],
    posted: "3 days ago",
    featured: false,
    url: "https://www.naspers.com/careers"
  },
  {
    id: 12,
    title: "Mid Frontend Developer",
    company: "Netcare",
    logo: "NC",
    logoColor: "#f87171",
    city: "Johannesburg",
    workType: "On-site",
    level: "Mid",
    salary: "R32k–R44k/mo",
    salaryValue: 44000,
    skills: ["Angular", "JavaScript", "SCSS", "REST APIs"],
    posted: "1 week ago",
    featured: false,
    url: "https://www.netcare.co.za"
  }
];


// ---- RENDER JOBS ----
// Takes a list of job objects and builds HTML cards from them.
// We set the innerHTML of the job list container to show them.

function renderJobs(list) {
  var container = document.getElementById("jobList");
  var emptyMsg  = document.getElementById("noResults");
  var countEl   = document.getElementById("shownCount");

  // If nothing to show, display the empty message
  if (list.length === 0) {
    container.innerHTML = "";
    emptyMsg.style.display = "block";
    countEl.textContent = "0";
    return;
  }

  emptyMsg.style.display = "none";
  countEl.textContent = list.length;

  // Build one HTML string for all cards, then insert at once
  var html = "";

  for (var i = 0; i < list.length; i++) {
    var job = list[i];

    // Work out the work type badge class
    var workClass = "badge-onsite";
    if (job.workType === "Remote") workClass = "badge-remote";
    if (job.workType === "Hybrid") workClass = "badge-hybrid";

    // Work out the level badge class
    var levelClass = "badge-junior";
    if (job.level === "Mid")    levelClass = "badge-mid";
    if (job.level === "Senior") levelClass = "badge-senior";

    // Build skill tags
    var skillsHtml = "";
    for (var s = 0; s < job.skills.length; s++) {
      skillsHtml += '<span class="skill-tag">' + job.skills[s] + '</span>';
    }

    // Featured class
    var featuredClass = job.featured ? " is-featured" : "";

    // Animation delay — each card comes in slightly after the last
    var delay = (i * 0.05) + "s";

    html +=
      '<article class="job-card' + featuredClass + '" ' +
        'style="animation-delay:' + delay + '" ' +
        'onclick="window.open(\'' + job.url + '\', \'_blank\')">' +

        '<div class="company-logo" style="color:' + job.logoColor + '; border-color:' + job.logoColor + '44">' +
          job.logo +
        '</div>' +

        '<div class="job-info">' +
          '<div class="job-title">' + job.title + '</div>' +
          '<div class="job-company">' + job.company + '</div>' +
          '<div class="job-badges">' +
            '<span class="badge badge-city">&#128205; ' + job.city + '</span>' +
            '<span class="badge ' + workClass + '">' + job.workType + '</span>' +
            '<span class="badge ' + levelClass + '">' + job.level + '</span>' +
          '</div>' +
          '<div class="job-skills">' + skillsHtml + '</div>' +
        '</div>' +

        '<div class="job-actions">' +
          '<div class="job-salary">' + job.salary + '</div>' +
          '<div class="job-posted">' + job.posted + '</div>' +
          '<button class="apply-btn">Apply Now</button>' +
        '</div>' +

      '</article>';
  }

  container.innerHTML = html;
}


// ---- FILTER AND SEARCH ----
// Reads the active checkboxes and search text,
// then filters the jobs array down to matching jobs,
// sorts them, and renders the result.

function applyFilters() {
  var search = document.getElementById("searchInput").value.trim().toLowerCase();

  // Collect all ticked checkbox values into an array
  var ticked = [];
  var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (var i = 0; i < checkboxes.length; i++) {
    ticked.push(checkboxes[i].value);
  }

  // Filter jobs
  var filtered = [];
  for (var j = 0; j < jobs.length; j++) {
    var job = jobs[j];

    // Does this job match all ticked filters?
    var matchesFilter = true;
    if (ticked.length > 0) {
      var found = false;
      for (var t = 0; t < ticked.length; t++) {
        if (job.city === ticked[t] || job.workType === ticked[t] || job.level === ticked[t]) {
          found = true;
          break;
        }
      }
      matchesFilter = found;
    }

    // Does this job match the search text?
    var matchesSearch = true;
    if (search !== "") {
      var inTitle   = job.title.toLowerCase().indexOf(search)   > -1;
      var inCompany = job.company.toLowerCase().indexOf(search) > -1;
      var inSkills  = false;
      for (var sk = 0; sk < job.skills.length; sk++) {
        if (job.skills[sk].toLowerCase().indexOf(search) > -1) {
          inSkills = true;
          break;
        }
      }
      matchesSearch = inTitle || inCompany || inSkills;
    }

    if (matchesFilter && matchesSearch) {
      filtered.push(job);
    }
  }

  // Sort
  var sortBy = document.getElementById("sortSelect").value;

  if (sortBy === "featured") {
    filtered.sort(function(a, b) {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  } else if (sortBy === "salary") {
    filtered.sort(function(a, b) {
      return b.salaryValue - a.salaryValue;
    });
  }
  // "newest" keeps original array order

  renderJobs(filtered);
}


// ---- CLEAR FILTERS ----
// Unticks all checkboxes, clears the search box,
// and re-runs the filter to show all jobs again.

function clearFilters() {
  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
  document.getElementById("searchInput").value = "";
  applyFilters();
}


// ---- COUNT UP ANIMATION ----
// Makes the stat numbers count up from 0 when the page loads.
// Looks great and draws attention to the numbers.

function countUp(elementId, target, duration) {
  var el    = document.getElementById(elementId);
  var start = performance.now();

  function step(now) {
    var elapsed  = now - start;
    var progress = Math.min(elapsed / duration, 1);
    // Ease out — starts fast, slows at the end
    var eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}


// ---- LIVE SEARCH ----
// Runs applyFilters every time the user types a letter
// so results update without needing to click Search.

document.getElementById("searchInput").addEventListener("input", applyFilters);


// ---- START UP ----
// Everything that runs once when the page first loads.

var totalJobs  = jobs.length;
var remoteJobs = 0;
var juniorJobs = 0;

for (var i = 0; i < jobs.length; i++) {
  if (jobs[i].workType === "Remote") remoteJobs++;
  if (jobs[i].level    === "Junior") juniorJobs++;
}

// Set the "X of X jobs" total
document.getElementById("totalShown").textContent = totalJobs;

// Animate the three stat numbers
countUp("totalCount",  totalJobs,  1200);
countUp("remoteCount", remoteJobs, 1200);
countUp("juniorCount", juniorJobs, 1200);

// Show all jobs on page load
applyFilters();
