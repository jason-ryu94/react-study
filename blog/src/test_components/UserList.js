import React from "react";


function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({users}) {
    

    return (
        // <div>
        //     <div>
        //         <b>{users[0].username}</b> <span>({users[0].email})</span>
        //     </div>
        //     <div>
        //         <b>{users[1].username}</b> <span>({users[1].email})</span>
        //     </div>
        //     <div>
        //         <b>{users[2].username}</b> <span>({users[1].email})</span>
        //     </div>
        // </div>


        /**
         * 키 값이 없으면 배열이 업데이트 될때 굉장히 비효율적인 방법으로 업데이트가 이루어진다. 
         */
        <div>
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}

            {users.map(user => (
                <User user={user} key={ user.id} />
            ))}

        </div>

    );
}



export default UserList;