README
NAME: SHENG ZHU
STUDENT NUMBER: 20082253

DESCRIPTION:
(1)	Sever: I modified the node server to cater to the functions of client. The current server is different from the one I submitted in CA1. The current version of sever is more comprehensive and complete. I add a new model ‘user’ to the server to implement ’login’ and ‘sign up’ function and create 5 new routes that are needed by the client. These new routes include the validation of username and password, authenticating user when logging in and so on. Besides, I modified the schema of 2 former models ‘issues’ and ‘solutions’, adding a new property ‘text’ to each in order to store the text body of issues and solutions. The data is stored in mlab.

(2)	Client: The client is based on the structure of donationWeb. I add some elements to attach more joy to my web. The decoration is designed by myself (except background music) and all the background pictures and illustrations are drawn by myself. User login, logout and sign up are implemented. I place routing restriction on core function pages to ensure that those pages and operations are only accessible after logging in. Before logging in, all the accesses to those pages will be switched to login page. There are confirmation dialogs before any operations that will change the data in database such as deleting and updating, and there are messages and notifications to inform whether the operation failed or succeeded. There are different validations on every input box before submitting to ensure all the inputs are legal. In addition to the basic functions, I want to challenge something new so I build an art gallery in page ‘AboutUs’ to display my artworks. Pictures are displayed in thumbnails with descriptions and neat layout. Large pictures are displayed in dialogs after click on the thumbnails. The client is already deployed to domain http://full-boat.surge.sh .

DATABASE SCHEMAS:
issues {
category: String,
status: {type: Boolean , default: false},
text: String,
solutions: []
},
solutions {
solutionId: Schema.Types.ObjectId,
parent: String,
text: String,
like: {type: Number, default: 0}
} ,
user {
name: {type:String,unique:true},
pass: String
}

GITHUB LINKS:
(1)	Server: https://github.com/leonhyper/GET_A_HAND.git
(2)	Client: https://github.com/leonhyper/vue.git
YOUTUBE LINKS: https://www.youtube.com/watch?v=TrTiHwPmy4o

REFERENCES:
1.	MONGOOSE OFFICIAL GUIDE DOCS: https://mongoosejs.com/docs/guide.html 
2.	Node.js v8.12.0 Documentation: https://nodejs.org/dist/latest-v8.x/docs/api/
3.	JavaScript 参考手册: http://www.w3school.com.cn/jsref/index.asp
4.	Background Music 夏恋.mp3 Otokaze/Rhyzz
5.	donationWeb by David Drohan, WIT 
