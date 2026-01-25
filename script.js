function analyzeResume() {
  const resumeText = document.getElementById("resume").value.toLowerCase();
  const jobText = document.getElementById("job").value.toLowerCase();

  if (!resumeText || !jobText) {
    alert("Please paste both resume and job description.");
    return;
  }

  const skills = [
    "html", "css", "javascript", "python", "java", "sql",
    "react", "node", "git", "api", "data structures",
    "machine learning", "web development", "communication", "Problem-solving", "Teamwork & collaboration","Time management", "Adaptability",
    "Critical thinking", "Debugging", "Analytical skills", "Attention to detail", "Learning ability", "Project management (basic)"
];

  let matched = [];
  let missing = [];

  skills.forEach(skill => {
    if (jobText.includes(skill)) {
      if (resumeText.includes(skill)) {
        matched.push(skill);
      } else {
        missing.push(skill);
      }
    }
  });

  let score = matched.length + missing.length === 0
    ? 0
    : Math.round((matched.length / (matched.length + missing.length)) * 100);

  document.getElementById("score").innerText = score + "%";
  document.getElementById("matched").innerText =
    matched.length ? matched.join(", ") : "None";

  document.getElementById("missing").innerText =
    missing.length ? missing.join(", ") : "None";
}
