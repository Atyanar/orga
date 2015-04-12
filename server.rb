
require 'webrick'
require 'json'

puts 'Server started: http://localhost:3000/'

root = File.expand_path './code'
server = WEBrick::HTTPServer.new :Port => 3000, :DocumentRoot => root

# server.mount_proc '/comments.json' do |req, res|
#   comments = JSON.parse(File.read('./comments.json'))

#   if req.request_method == 'POST'
#     # Assume it's well formed
#     comments << req.query
#     File.write('./comments.json', JSON.pretty_generate(comments, :indent => '    '))
#   end

#   # always return json
#   res['Content-Type'] = 'application/json'
#   res['Cache-Control'] = 'no-cache'
#   res.body = JSON.generate(comments)
# end



trap 'INT' do server.shutdown end

server.start
