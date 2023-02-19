<div class="w3-container" id="custom">
	<div class="w3-panel w3-card w3-light-grey">
		<h4>To Add A Variation To The Response Use The Code Below</h4>
	<div class="w3-code jsHigh notranslate">
		const options = {
			<br>
        name: "discordId", <br>
		type: Int, <br>
		length :"11" <br>
		}
		<br>
		const users = await fetch(`https://fake-data-generator.blueobsidian.repl.co/fake/users?number=10&variation=${options}`);<br>
		const res = users.json() ; <br>
	</div>
	<h4>Response</h4>
	
	<div class="w3-code jsHigh notranslate">
		{
		name: "Bot",<br>
		password: "password", <br>
		email: "hello@yy.com", <br>
		discordId: "1231312313"
		}
	</div>
	<h5>You Can Add Multiple Variations</h5>
	</div>
 </div>