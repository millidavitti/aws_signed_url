import React from "react";

export default function test() {
	{
		{
			(ui.company.value.primaryContactPerson = ui.primaryContactPerson.value),
				(ui.company.value.registeredAddress = ui.registeredAddress.value),
				(ui.company.value.mailingAddress = ui.mailingAddress.value),
				(ui.company.value.logoS3Key = "actions.s3ImageUpload.data"),
				ui.company.value;
		}
	}
	return <div>test</div>;
}

const ui = {
	company: {
		value: {
			legalName: "Acme Inc",
			stateOfIncorporation: "California",
			industry: "Technology",
			totalNumberOfEmployees: 100,
			numberOfPartTimeEmployees: 20,
			numberOfFullTimeEmployees: 80,
			website: "https://www.acmeinc.com",
			linkedInCompanyPage: "https://www.linkedin.com/company/acme-inc",
			facebookCompanyPage: "https://www.facebook.com/acmeinc",
			otherInformation: "",
			logoS3Key:
				"The Ultimate Guide To Meal Planning.jpgb3d0c1a3-5e30-45ae-b2c3-e46dab35b690.jpeg",
			phone: "555-1234",
			fax: "555-5678",
			email: "info@acmeinc.com",
		},
	},
	primaryContactPerson: {
		value: {
			firstName: "John",
			lastName: "Doe",
			email: "johndoe@acmeinc.com",
			phone: "5555-4321",
		},
	},
	registeredAddress: {
		value: {
			isMailingAddressDifferentFromRegisteredAddress: false,
			country: "USA",
			state: "California",
			city: "San Francisco",
			street: "123 Main St",
			zipCode: "94105",
		},
	},
	mailingAddress: {
		value: {
			isMailingAddressDifferentFromRegisteredAddress: true,
			country: "USA",
			state: "California",
			city: "San Francisco",
			street: "456 Second St",
			zipCode: "94107",
		},
	},
};
