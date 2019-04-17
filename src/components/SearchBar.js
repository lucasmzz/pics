import React from 'react';

class SearchBar extends React.Component {
	state = {
		inputText: ''
	}

	render(){
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search:</label>
						<input 
							type="text"
							value={this.state.inputText} 
							onChange={e => this.setState({inputText: e.target.value})} 
							className="ui massive input" 
						/>
					</div>
				</form>
			</div>
		);
	};
};

export default SearchBar;