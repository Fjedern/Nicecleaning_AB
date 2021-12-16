import React, {useState} from "react";


function UserInfo({props}) {

    return (
        <div className="table w-full ...">
            <div className="table-header-group ...">
                <div className="table-row">
                    <div className="table-cell text-left ..."><p>Välkommen!</p><br/>
                    <p>{props}</p>
                        <p>{props}</p>
                        <p>{props}</p>
                    </div>
                    <div className="table-cell text-left ...">Adress
                        <div>{props.userName}</div></div>
                    <div className="table-cell text-left ...">{props}</div>
                </div>
            </div>
            <div className="table-row-group">
                <div className="table-row">
                    <div className="table-cell ...">Chocolate Starfish And The Hot Dog Flavored Water</div>

                </div>
                <div className="table-row">
                    <div className="table-cell ...">Significant Other</div>

                </div>
                <div className="table-row">
                    <div className="table-cell ...">Three Dollar Bill, Y’all $</div>

                </div>
            </div>
        </div>
    );
}

export default UserInfo;