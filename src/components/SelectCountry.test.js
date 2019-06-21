import React from "react";
import { shallow } from "enzyme";
import SelectCountry from "./SelectCountry";

describe("<SelectCountry />", () => {
	const setup = props => shallow(<SelectCountry {...props} />);
	it("uses the correct tags", () => {
		const wrapper = setup();
		expect(wrapper.find("select")).toHaveLength(1);
		expect(wrapper.find("option").length).toBeGreaterThan(10);
	});

	it("Display the passed params on top", () => {
		const props = { tops: ["France", "Brasil"] };
		const wrapper = setup(props);
		expect(
			wrapper
				.find("option")
				.first()
				.text()
		).toBe("France");
	});
});
