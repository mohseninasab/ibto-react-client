
// #############################################################################
// list of all the queries
// #############################################################################

export const queries = {
	getDonationQuery,
	addDonationQuery,
	updateDonationQuery,
	deleteDonationQuery,
	getUserDonationsQuery,

	addOfficeQuery,
	getOfficesQuery,
	deleteOfficeQuery,
	updateOfficeQuery,

	addSubjectQuery,
	getSubjectsQuery,
	updateSubjectQuery,
	deleteSubjectQuery,

	addStaffQuery,
	getStaffQuery,
	updateStaffQuery,
	deleteStaffQuery,
}

// #############################################################################
// get Donation queries
// #############################################################################

function getDonationQuery(){
	return { query: 
		`
			SELECT id, bloodType, serial, date, expDate, donor, donorFirstName, donorLastName, donorNationalCode, patient, patientFirstName, patientLastName, patientNationalCode, laboratory, laboratoryName, usable, other, officeId, donationOfficeName, examinerId, examinerFirstName, examinerLastName, examinerEmployeeNumber, phlebotomistId, phlebotomistFirstName, phlebotomistLastName, phlebotomistEmployeeNumber FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM ibto.donations 
			LEFT JOIN (SELECT id AS examinerId, firstName AS examinerFirstName, lastName AS examinerLastName, employeeNumber AS examinerEmployeeNumber  FROM ibto.staff) AS examiners ON examiners.examinerId = ibto.donations.examiner) AS doantionWithExaminer
			LEFT JOIN (SELECT id AS phlebotomistId, firstName AS phlebotomistFirstName, lastName AS phlebotomistLastName, employeeNumber AS phlebotomistEmployeeNumber FROM ibto.staff) AS phlebotomists ON phlebotomists.phlebotomistId = doantionWithExaminer.phlebotomist) AS doantionWithPhlebotomist
			LEFT JOIN (SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN (SELECT id AS LaboratoryId, name AS laboratoryName from ibto.offices) AS laboratory ON doantionWithOffice.officeId = laboratory.LaboratoryId) AS doantionWithLaboratory
			LEFT JOIN (SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithLaboratory.donor) AS doantionWithDonor
			LEFT JOIN (SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient;
	  `
	  };
}

// #############################################################################
// get the selected user all its Donation queries
// #############################################################################

function getUserDonationsQuery(data) {
	return { query: 
		`
			SELECT id, bloodType, serial, date, expDate, donor, donorFirstName, donorLastName, donorNationalCode, patient, patientFirstName, patientLastName, patientNationalCode, laboratory, laboratoryName, usable, other, officeId, donationOfficeName, examinerId, examinerFirstName, examinerLastName, examinerEmployeeNumber, phlebotomistId, phlebotomistFirstName, phlebotomistLastName, phlebotomistEmployeeNumber FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM ibto.donations 
			LEFT JOIN (SELECT id AS examinerId, firstName AS examinerFirstName, lastName AS examinerLastName, employeeNumber AS examinerEmployeeNumber  FROM ibto.staff) AS examiners ON examiners.examinerId = ibto.donations.examiner) AS doantionWithExaminer
			LEFT JOIN (SELECT id AS phlebotomistId, firstName AS phlebotomistFirstName, lastName AS phlebotomistLastName, employeeNumber AS phlebotomistEmployeeNumber FROM ibto.staff) AS phlebotomists ON phlebotomists.phlebotomistId = doantionWithExaminer.phlebotomist) AS doantionWithPhlebotomist
			LEFT JOIN (SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN (SELECT id AS LaboratoryId, name AS laboratoryName from ibto.offices) AS laboratory ON doantionWithOffice.laboratory = laboratory.LaboratoryId) AS doantionWithLaboratory
			LEFT JOIN (SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithLaboratory.donor) AS doantionWithDonor
			LEFT JOIN (SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient WHERE donorNationalCode = ${data.donorNationalCode};
	  `
	};
}

// #############################################################################
// create new donation and get the new data from the server
// #############################################################################

function addDonationQuery(data) {
	return { 
		query: `INSERT INTO ibto.donations (serial, usable, date, donor, expDate, phlebotomist, examiner, donationOffice, other) VALUES ("${data.serial}", ${data.usable}, "${data.date}", ${data.donor}, "${data.expDate}", ${data.phlebotomist}, ${data.examiner}, ${data.donationOffice}, "${data.other}");`,

		secondQuery: `
			SELECT id, bloodType, serial, date, expDate, donor, donorFirstName, donorLastName, donorNationalCode, patient, patientFirstName, patientLastName, patientNationalCode, laboratory, usable, other, officeId, donationOfficeName, examinerId, examinerFirstName, examinerLastName, examinerEmployeeNumber, phlebotomistId, phlebotomistFirstName, phlebotomistLastName, phlebotomistEmployeeNumber FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM ibto.donations 
			LEFT JOIN (SELECT id AS examinerId, firstName AS examinerFirstName, lastName AS examinerLastName, employeeNumber AS examinerEmployeeNumber  FROM ibto.staff) AS examiners ON examiners.examinerId = ibto.donations.examiner) AS doantionWithExaminer
			LEFT JOIN (SELECT id AS phlebotomistId, firstName AS phlebotomistFirstName, lastName AS phlebotomistLastName, employeeNumber AS phlebotomistEmployeeNumber FROM ibto.staff) AS phlebotomists ON phlebotomists.phlebotomistId = doantionWithExaminer.phlebotomist) AS doantionWithPhlebotomist
			LEFT JOIN (SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN (SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithOffice.donor) AS doantionWithDonor
			LEFT JOIN (SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient;
	  `
	};
}

// #############################################################################
// update donation and get the new data from the server
// #############################################################################

function updateDonationQuery(data) {
	return { 
		query: `UPDATE ibto.donations SET serial = "${data.serial}", usable = ${data.usable}, date = "${data.date}", donor = ${data.donor}, patient = ${data.patient}, expDate = "${data.expDate}", phlebotomist = ${data.phlebotomist}, examiner = ${data.examiner}, donationOffice = ${data.donationOffice}, laboratory=${data.laboratory}, other = "${data.other}" WHERE id = ${data.id};`,

		secondQuery: `
			SELECT id, bloodType, serial, date, expDate, donor, donorFirstName, donorLastName, donorNationalCode, patient, patientFirstName, patientLastName, patientNationalCode, laboratory, usable, other, officeId, donationOfficeName, examinerId, examinerFirstName, examinerLastName, examinerEmployeeNumber, phlebotomistId, phlebotomistFirstName, phlebotomistLastName, phlebotomistEmployeeNumber FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM ibto.donations 
			LEFT JOIN (SELECT id AS examinerId, firstName AS examinerFirstName, lastName AS examinerLastName, employeeNumber AS examinerEmployeeNumber  FROM ibto.staff) AS examiners ON examiners.examinerId = ibto.donations.examiner) AS doantionWithExaminer
			LEFT JOIN (SELECT id AS phlebotomistId, firstName AS phlebotomistFirstName, lastName AS phlebotomistLastName, employeeNumber AS phlebotomistEmployeeNumber FROM ibto.staff) AS phlebotomists ON phlebotomists.phlebotomistId = doantionWithExaminer.phlebotomist) AS doantionWithPhlebotomist
			LEFT JOIN (SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN (SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithOffice.donor) AS doantionWithDonor
			LEFT JOIN (SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient;
	  `
	};
}

// #############################################################################
// delete donation and get the new table from the server
// #############################################################################

function deleteDonationQuery(data) {
	return { 
		query: `DELETE FROM ibto.donations WHERE id = ${data.id}`,

		secondQuery: `
			SELECT id, bloodType, serial, date, expDate, donor, donorFirstName, donorLastName, donorNationalCode, patient, patientFirstName, patientLastName, patientNationalCode, laboratory, usable, other, officeId, donationOfficeName, examinerId, examinerFirstName, examinerLastName, examinerEmployeeNumber, phlebotomistId, phlebotomistFirstName, phlebotomistLastName, phlebotomistEmployeeNumber FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM ibto.donations 
			LEFT JOIN (SELECT id AS examinerId, firstName AS examinerFirstName, lastName AS examinerLastName, employeeNumber AS examinerEmployeeNumber  FROM ibto.staff) AS examiners ON examiners.examinerId = ibto.donations.examiner) AS doantionWithExaminer
			LEFT JOIN (SELECT id AS phlebotomistId, firstName AS phlebotomistFirstName, lastName AS phlebotomistLastName, employeeNumber AS phlebotomistEmployeeNumber FROM ibto.staff) AS phlebotomists ON phlebotomists.phlebotomistId = doantionWithExaminer.phlebotomist) AS doantionWithPhlebotomist
			LEFT JOIN (SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN (SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithOffice.donor) AS doantionWithDonor
			LEFT JOIN (SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient;
	  `
	};
}

// #############################################################################
// 
// #############################################################################

function addOfficeQuery(data) {
	return {
    query: `INSERT INTO ibto.offices (name, address, city, phoneNumber) VALUES ("${data.name}", "${data.address}", "${data.city}", "${data.phoneNumber}");`,
    secondQuery: `SELECT * FROM ibto.offices;`,
  };
}

// #############################################################################
// 
// #############################################################################

function getOfficesQuery() {
	return {
    query: "SELECT * FROM ibto.offices;"
  };
}

// #############################################################################
// 
// #############################################################################

function updateOfficeQuery(data) {
	return {
    query: `UPDATE ibto.offices SET name = "${data.name}" ,address = "${data.address}", city = "${data.city}", phoneNumber = "${data.phoneNumber}" WHERE id = ${data.id} ;`,
    secondQuery: `SELECT * FROM ibto.offices;`,
  };
}

// #############################################################################
// 
// #############################################################################

function deleteOfficeQuery(data) {
	return {
    query: `DELETE FROM ibto.offices WHERE id = ${data.id}`,
    secondQuery: `SELECT * FROM ibto.offices;`,
  };
}

// #############################################################################
// 
// #############################################################################

function addSubjectQuery(data) {
	return {
    query: `INSERT INTO ibto.subjects (firstName, lastName, bloodType, type, address, city, phoneNumber, nationalCode) VALUES ("${data.firstName}", "${data.lastName}", "${data.bloodType}", "${data.type}", "${data.address}", "${data.city}", "${data.phoneNumber}", ${data.nationalCode});`,
    secondQuery: `SELECT * FROM ibto.subjects;`,
  };
}

// #############################################################################
// 
// #############################################################################

function getSubjectsQuery() {
	return {
    query: "SELECT * FROM ibto.Subjects;"
  };
}

// #############################################################################
// 
// #############################################################################

function updateSubjectQuery(data) {
	return {
    query: `UPDATE ibto.subjects SET firstName = "${data.firstName}", lastName = "${data.lastName}" , bloodType = "${data.bloodType}", type = "${data.type}", address = "${data.address}", city = "${data.city}", phoneNumber = "${data.phoneNumber}", nationalCode = ${data.nationalCode} WHERE id = ${data.id}`,
    secondQuery: `SELECT * FROM ibto.subjects;`,
  };
}

// #############################################################################
// 
// #############################################################################

function deleteSubjectQuery(data) {
	return {
    query: `DELETE FROM ibto.subjects WHERE id = ${data.id}`,
    secondQuery: `SELECT * FROM ibto.subjects;`,
  };
}

// #############################################################################
// 
// #############################################################################

function addStaffQuery(data) {
	return {
		query: `INSERT INTO ibto.staff (firstName, lastName, employeeNumber, phoneNumber, address, city, role, office) VALUES ("${data.firstName}", "${data.lastName}", "${data.employeeNumber}", "${data.phoneNumber}", "${data.address}", "${data.city}", "${data.role}", ${data.office});`,
    secondQuery: `SELECT id, firstName, lastName, employeeNumber, phoneNumber, address, city, role, officeName, officeId as office FROM ibto.staff INNER JOIN (SELECT id AS officeId, name AS officeName FROM ibto.offices) AS officeTable ON officeTable.officeId = ibto.staff.office;`,
  };
}

// #############################################################################
// 
// #############################################################################

function getStaffQuery() {
	return {
		query: "SELECT id, firstName, lastName, employeeNumber, phoneNumber, address, city, role, officeName, officeId as office FROM ibto.staff INNER JOIN (SELECT id AS officeId, name AS officeName FROM ibto.offices) AS officeTable ON officeTable.officeId = ibto.staff.office;"
  };
}

// #############################################################################
// 
// #############################################################################

function updateStaffQuery(data) {
	return {
		query: `UPDATE ibto.staff SET firstName = "${data.firstName}", lastName = "${data.lastName}", employeeNumber = "${data.employeeNumber}", phoneNumber = "${data.phoneNumber}", address = "${data.address}", city = "${data.city}", role = "${data.role}", office = ${data.office} WHERE id = ${data.id};`,
    secondQuery: `SELECT id, firstName, lastName, employeeNumber, phoneNumber, address, city, role, officeName, officeId as office FROM ibto.staff INNER JOIN (SELECT id AS officeId, name AS officeName FROM ibto.offices) AS officeTable ON officeTable.officeId = ibto.staff.office;`,
  };
}

// #############################################################################
// 
// #############################################################################

function deleteStaffQuery(data) {
	return {
		query: `DELETE FROM ibto.staff WHERE id = ${data.id}`,
    secondQuery: `SELECT id, firstName, lastName, employeeNumber, phoneNumber, address, city, role, officeName, officeId as office FROM ibto.staff INNER JOIN (SELECT id AS officeId, name AS officeName FROM ibto.offices) AS officeTable ON officeTable.officeId = ibto.staff.office;`,
  };
}

