package my.test;

import com.smartfoxserver.v2.entities.User;
import com.smartfoxserver.v2.entities.data.ISFSArray;
import com.smartfoxserver.v2.entities.data.ISFSObject;
import com.smartfoxserver.v2.entities.data.SFSArray;
import com.smartfoxserver.v2.entities.data.SFSObject;
import com.smartfoxserver.v2.extensions.BaseClientRequestHandler;

public class PlayerHandler extends BaseClientRequestHandler {

	public void handleClientRequest(User player, ISFSObject params) {
		sfsExtension parentEx = (sfsExtension) getParentExtension();
		ISFSObject rtn = new SFSObject();
		ISFSArray rtnArr = new SFSArray();
		rtn.putSFSArray("players", rtnArr);
		rtnArr.addUtfString("terrell davis");
		rtnArr.addUtfString("Priest Holmes");
		rtnArr.addUtfString("Rodney Hampton");
		parentEx.send("PlayerList", rtn, player);

	}

}
