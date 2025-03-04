import React from 'react';

function Button({ handelPhrase, children }) {
	return <button onClick={handelPhrase}>{children}</button>;
}

export default Button;
