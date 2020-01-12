// #############################################################################
// this function will generates the array of acceptable parameters in the path
// #############################################################################

export default function generatePath(path, params = []) {

	// the line below checks if there is slash at the end of path string
	const slashAtEnd =  path.lastIndexOf("/") === path.length - 1;

	// this line prevent the path to have double slashes
  	let outputPath =  slashAtEnd ? path : `${path}/`

  	// gets the last index number
  	const lastIndex = params.length - 1;

  	params.forEach((param, index) => {
    	outputPath = lastIndex === index ? `${outputPath}:${param}` : `${outputPath}:${param}&`
  	});

  	return outputPath;
}

export { generatePath }