package my.test;

import com.smartfoxserver.v2.extensions.SFSExtension;

public class sfsExtension extends SFSExtension {
	/** {@inheritDoc} */
	public void init() {
		this.addRequestHandler("PlayerList", PlayerHandler.class);

	}
	
	/** {@inheritDoc} */
	@Override
	public void destroy()
	{
		super.destroy();
	}

}
