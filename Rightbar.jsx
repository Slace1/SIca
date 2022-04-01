import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"
import { Info, LocationCity, BurstMode, Description } from "@material-ui/icons"


export default function Rightbar({ profile }) {
    const DP = process.env.REACT_APP_DOSSIER_PUBLIC;
    const HomeRightBar = () => {
        return (
            <>
                <div className="rightbarHome">
                    <div className="rightbarWrapper">
                        <div className="birthdayContainer">
                            <img src="assets/gift.png" alt="" className="birthdayImg" />
                            <span className="birthdayText">
                                <b>PA</b> and <b>3 others friends</b> have a birthday today
                            </span>
                        </div>
                    </div>

                    <img src="assets/log.jfif" alt="" className="rightbarAd" />
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="rightbarFriendList">
                        {Users.map(u => (
                            <Online key={u.id} user={u} />
                        ))}
                    </ul>
                </div>
            </>
        )
    }
    const ProfileRightBar = () => {
        return (
            <>
                <div className="rightbarWrapperProfile">
                    <div className="share">
                        <div className="shareWrapper">
                            <div className="rightbarIcons">
                                <div className="rightbarIconItem">
                                    <Info htmlColor="#E57E72" className="shareIcon" />
                                </div>
                                <h4 className="rightbarTitle">User information</h4>
                            </div>
                            <div className="rightbarInfo">
                                <div className="rightbarInfoItem">
                                    <LocationCity htmlColor="#33BAFF" className="shareIcon" />
                                    <span className="rightbarInfoKey">City:</span>
                                    <span className="rightbarInfoValue">New-York</span>
                                </div>
                                <div className="rightbarInfoItem">
                                    <BurstMode htmlColor="#33BAFF" className="shareIcon" />
                                    <span className="rightbarInfoKey">From:</span>
                                    <span className="rightbarInfoValue">Madrid</span>
                                </div>
                                <div className="rightbarInfoItem">
                                    <Description htmlColor="#33BAFF" className="shareIcon" />
                                    <span className="rightbarInfoKey">Description:</span>
                                    <span className="rightbarInfoValue">I make electronic music, and i love progressive house and future bass</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="rightbarTitle">Favorite Artists</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="https://www.revealedrecordings.com/uploads/image/624109e6f4d6ff5aaa69b8ab.jpg" alt="" className="rightbarFollowingImg" />

                            <span className="rightbarFollowingName">Hardwell</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}