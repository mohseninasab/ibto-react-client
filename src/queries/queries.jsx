
// #############################################################################
// list of all the queries
// #############################################################################

export const queries = {
	getDonationQuery,
	addDonationQuery,
	updateDonationQuery,
	deleteDonationQuery,
}

// #############################################################################
// get Donation queries
// #############################################################################

function getDonationQuery(){
	return { query: 
		`
			SELECT id, bloodType, serial, date, expDate, donor, donorFirstName, donorLastName, donorNationalCode, patient, patientFirstName, patientLastName, patientNationalCode, laboratory, usable, other, officeId, donationOfficeName, examinerId, examinerFirstName, examinerLastName, examinerEmployeeNumber, phlebotomistId, phlebotomistFirstName, phlebotomistLastName, phlebotomistEmployeeNumber FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM (
			SELECT * FROM ibto.donations 
			LEFT JOIN (SELECT id AS examinerId, firstName AS examinerFirstName, lastName AS examinerLastName, employeeNumber AS examinerEmployeeNumber  FROM ibto.staff) AS examiners ON examiners.examinerId = ibto.donations.examiner) AS doantionWithExaminer
			LEFT JOIN (SELECT id AS phlebotomistId, firstName AS phlebotomistFirstName, lastName AS phlebotomistLastName, employeeNumber AS phlebotomistEmployeeNumber FROM ibto.staff) AS phlebotomists ON phlebotomists.phlebotomistId = doantionWithExaminer.phlebotomist) AS doantionWithPhlebotomist
			LEFT JOIN(SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN(SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithOffice.donor) AS doantionWithDonor
			LEFT JOIN(SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient;
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
			LEFT JOIN(SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN(SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithOffice.donor) AS doantionWithDonor
			LEFT JOIN(SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient;
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
			LEFT JOIN(SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN(SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithOffice.donor) AS doantionWithDonor
			LEFT JOIN(SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient;
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
			LEFT JOIN(SELECT id AS officeId, name AS donationOfficeName from ibto.offices) AS offices ON offices.officeId = doantionWithPhlebotomist.donationOffice) AS doantionWithOffice
			LEFT JOIN(SELECT id AS donorId, firstName AS donorFirstName, lastName AS donorLastName, nationalCode AS donorNationalCode, bloodType FROM ibto.subjects ) AS donors ON donors.donorId = doantionWithOffice.donor) AS doantionWithDonor
			LEFT JOIN(SELECT id AS patientId, firstName AS patientFirstName, lastName AS patientLastName, nationalCode AS patientNationalCode FROM ibto.subjects ) AS patients ON patients.patientId = doantionWithDonor.patient;
	  `
	};
}