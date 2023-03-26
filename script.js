"use strict";

Vue.createApp({
  data() {
    return {
      userCardH2text: "Attendee Pass",
      pText: "Coding Bootcamps Europe",
      imgData: {
        src: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1327/original/Coding_Bootcamps_Europe_logo.png",
        alt: "Coding Bootcamps Europe Logo",
        title: "Coding Bootcamps Europe Logo",
      },
      personName: "",
      studentID: "",
      selectedClass: null,
      classes: [
        {
          value: "",
          text: "Please choose a class",
        },
        {
          value: "2022-nov",
          text: "2022 - November",
        },
        {
          value: "2022-dez",
          text: "2022 - December",
        },
        {
          value: "2023-jan",
          text: "2023 - January",
        },
      ],
      selectedTimeSchema: null,
      timeSchemes: [
        {
          value: "",
          text: "Please choose a Time Schema",
        },
        {
          value: "FTC",
          text: "Full Time Class",
        },
        {
          value: "PTC",
          text: "Part Time Class",
        },
      ],
    };
  },
  computed: {
    displayName() {
      return this.personName.length > 0 ? this.personName : "Mr. Unknown";
    },
    displayClass() {
      return this.selectedClass.value === "" ? "-" : this.selectedClass.text;
    },
    displayStudentID() {
      return this.studentID === "" ? "-xx-" : this.studentID;
    },
    displayTimeSchema() {
      return this.selectedTimeSchema.value === ""
        ? "---"
        : this.selectedTimeSchema.text;
    },
  },
  created() {
    this.selectedClass = this.classes[0];
    this.selectedTimeSchema = this.timeSchemes[0];
  },
}).mount("#app");
