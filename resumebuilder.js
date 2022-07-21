function checkData() {
    var email = document.getElementById("email").value
    var emailREGEXP = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    if (emailREGEXP.test(email)) {
        createResume()
    } else {
        alert("Invalid Email")
    }
}

function createResume() {
    resumeWindow = window.open("about:blank")
    resume = resumeWindow.document  

    container = resume.createElement("div")
    container.setAttribute("id", "pageWrap")

    contactInfo = resume.createElement("div")
    contactInfo.setAttribute("id", "contactInfo")

    mainInfo = resume.createElement("div")
    mainInfo.id = "mainInfo"
    
    resume.write(".")
    styles()
    header()
    personalInfo()
    jobs()
    skills()
    techskills()
    education()
    references()

    container.appendChild(contactInfo)
    container.appendChild(mainInfo)    
    container.appendChild(educationInfo)
    container.appendChild(referenceInfo)    
    resume.body.appendChild(container)
}

function header() {
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var nameText = fname + " " + lname
    var nameNode = resume.createTextNode(nameText)
    var header = resume.createElement("h1")
    
    header.id = "name"
    header.appendChild(nameNode)
    contactInfo.appendChild(header)
}

function personalInfo() {
    phone = document.getElementById("phone").value
    address = document.getElementById("address").value
    city = document.getElementById("city").value
    state = document.getElementById("state").value
    zipCode = document.getElementById("zipCode").value
    email = document.getElementById("email").value
    
    address2 = city + ", " + state + zipCode

    contact1 = resume.createTextNode(phone)
    contact2 = resume.createTextNode(address)
    contact3 = resume.createTextNode(address2)
    contact4 = resume.createTextNode(email)

    contact = resume.createElement("div")
    contact.id = "contactCard"
    contact.appendChild(contact1)
    contact.appendChild(resume.createElement("br"))
    contact.appendChild(contact2)
    contact.appendChild(resume.createElement("br"))
    contact.appendChild(contact3)
    contact.appendChild(resume.createElement("br"))
    contact.appendChild(contact4)
    contact.appendChild(resume.createElement("br"))
    contactInfo.appendChild(contact)
}

function skills() {
    skillList = document.getElementById("skillset").children
    majorSkillContainer = resume.createElement("div")
    majorSkillContainer.id = "skills"
    skillsTitle = resume.createElement("h2")
    skillsTitle.className = "sectionHead"
    skillsTitle.appendChild(resume.createTextNode("Skills & Experience"))
    majorSkillContainer.appendChild(skillsTitle)

    for (i=0; i<skillList.length; i++) {
        if (skillList[i].tagName === "label"){
            continue
        }
        if (skillList[i].tagName === "br"){
            continue    
        }
        skillContainer = resume.createElement("dl")

        if (skillList[i].className === "skill"){
            skillHeader = resume.createElement("dt")
            skill = skillList[i].value
            skillHeader.appendChild(resume.createTextNode(skill))
            skillContainer.appendChild(skillHeader)
        }
        else if (skillList[i].className === "desc"){
            skillDesc = resume.createElement("dd")
            skillDescText = resume.createElement("p")
            desc = skillList[i].value
            skillDescText.appendChild(resume.createTextNode(desc))
            skillDesc.appendChild(skillDescText)
            skillContainer.appendChild(skillDesc)
        }
        majorSkillContainer.appendChild(skillContainer)
    }
    mainInfo.appendChild(majorSkillContainer)
}

function techskills() {
    tskills = document.getElementById("techskills").children
    tskillContainer = resume.createElement("div")
    tskillContainer.id = "tskills"

    tskillsTitle = resume.createElement("h2")
    tskillsTitle.className = "sectionHead"
    tskillsTitle.appendChild(resume.createTextNode("Technical Skills"))
    tskillContainer.appendChild(tskillsTitle)

    tskillList = resume.createElement("ul")

    for (i=0; i<tskills.length; i++) {
        if (tskills[i].className === "tskill") {
            tskill = resume.createElement("li")
            tdesc = tskills[i].value
            tskill.appendChild(resume.createTextNode(tdesc))
            tskillList.appendChild(tskill)
        }
        }
    tskillContainer.appendChild(tskillList)
    mainInfo.appendChild(tskillContainer)
}

function education() {
    school = document.getElementById("school").value
    degree = document.getElementById("degree").value
    graduated = document.getElementById("graduated").value

    educationText = degree + " from " + school + " as of " + graduated
    education1 = resume.createElement("p")
    education1.appendChild(resume.createTextNode(educationText))

    school2 = document.getElementById("school2").value
    degree2 = document.getElementById("degree2").value
    graduated2 = document.getElementById("graduated2").value

    educationText2 = degree2 + " from " + school2 + " as of " + graduated2

    education2 = resume.createElement("p")
    education2.appendChild(resume.createTextNode(educationText2))

    educationInfo = resume.createElement("div")
    educationInfo.id = "education"

    educationTitle = resume.createElement("h2")
    educationTitle.className = "sectionHead"
    educationTitle.appendChild(resume.createTextNode("Education"))
    educationInfo.appendChild(educationTitle)

    educationInfo.appendChild(education1)
    educationInfo.appendChild(education2)
}

function jobs() {
    employmentHistory = resume.createElement("div")
    employmentHistory.id = "emp"

    jobsTitle = resume.createElement("h2")
    jobsTitle.className = "sectionHead"
    jobsTitle.appendChild(resume.createTextNode("Work Experience"))
    employmentHistory.appendChild(jobsTitle)

    job = document.getElementsByClassName("job")

    for (i=0; i < job.length; i++) {
        employmentContainer = resume.createElement("div")
        employmentContainer.className = "employmentContainer"
        
        employmentList = job[i].children
        
        jobContainer = resume.createElement("div")
        jobContainer.className = "job"
        descriptionContainer = resume.createElement("div")
        descriptionContainer.className = "jobDescription"

        for (j=0; j < employmentList.length; j++) {
            if (employmentList[j].tagName === "label"){
                continue
            }
            if (employmentList[j].tagName === "br"){
                continue    
            }

            if (employmentList[j].className === "company"){
                employmentHeader = resume.createElement("h4")
                employmentHeader.className = "company"
                company = employmentList[j].value
                employmentHeader.appendChild(resume.createTextNode(company))
                jobContainer.appendChild(employmentHeader)

            } else if (employmentList[j].className === "position"){
                employmentPosition = resume.createElement("h4")
                employmentPosition.className = "position"
                position = employmentList[j].value
                employmentPosition.appendChild(resume.createTextNode(position))
                jobContainer.appendChild(employmentPosition)

            } else if (employmentList[j].className === "description"){
                employmentDesc = resume.createElement("ul")
                employmentBullet = resume.createElement("li")
                description = employmentList[j].value
                employmentBullet.appendChild(resume.createTextNode(description))
                employmentDesc.appendChild(employmentBullet)
                descriptionContainer.appendChild(employmentDesc)

            } else if (employmentList[j].type === "date") {
                empDates = resume.createElement("p")
                if (employmentList[j].className === "startDate") {
                    startDateText = employmentList[j].value
                    empDates.appendChild(resume.createTextNode(startDateText))

                } else {
                    endDateText = employmentList[j].value
                    empTime = startDateText + " to " + endDateText
                    empDates.appendChild(resume.createTextNode(empTime))
                    jobContainer.appendChild(empDates)
                    
                }
            }
        }
        employmentContainer.appendChild(jobContainer)
        employmentContainer.appendChild(descriptionContainer)
        employmentHistory.appendChild(employmentContainer)
    }
    mainInfo.appendChild(employmentHistory)
}
   
function references() {
    refContact = document.getElementById("contactInfo").value
    referenceInfo = resume.createElement("div")
    referenceInfo.id = "references"

    refTitle = resume.createElement("h2")
    refTitle.className = "sectionHead"
    refTitle.appendChild(resume.createTextNode("References"))
    referenceInfo.appendChild(refTitle)

    refSection = resume.createElement("p")
    refSection.appendChild(resume.createTextNode(refContact))
    referenceInfo.appendChild(refSection)

}

function styles() {
    cssSheet = resume.createElement("link")
    cssSheet.rel = "stylesheet";
    cssSheet.type = "text/css";
    cssSheet.href = "styler.css";
    resume.getElementsByTagName("head")[0].appendChild(cssSheet)
}