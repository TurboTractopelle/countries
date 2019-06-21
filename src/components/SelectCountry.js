import React from "react";
import countriesList from "countries-list";

/**
 *
 *
 * @param {Object} props
 * @param {Array} [props.tops] - Countries to be listed on top
 * @returns
 */
const SelectCountry = props => {
	const { tops = [] } = props;
	const countries = tops.concat(
		Object.entries(countriesList.countries)
			.reduce((a, k) => {
				return (a = tops.includes(k[1].name) ? a : [...a, k[1].name]);
			}, [])
			.sort((a, b) => a.localeCompare(b))
	);

	return (
		<div>
			<select datatest="select">
				{countries.map(c => (
					<option key={c}>{c}</option>
				))}
			</select>
		</div>
	);
};

export default SelectCountry;
