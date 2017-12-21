<?php
/**
	* A delegate class for the entire application to handle custom handling of
	* some functions such as permissions and preferences.
	*/
class conf_ApplicationDelegate {
  
	/**
		* Returns permissions array.  This method is called every time an action is
		* performed to make sure that the user has permission to perform the action.
		* @param record A Dataface_Record object (may be null) against which we check
		*               permissions.
		* @see Dataface_PermissionsTool
		* @see Dataface_AuthenticationTool
		*/
	function getPermissions(&$record){
		$auth =& Dataface_AuthenticationTool::getInstance();
		$user =& $auth->getLoggedInUser();
		if ( !isset($user) ) return Dataface_PermissionsTool::NO_ACCESS();
		// if the user is null then nobody is logged in... no access.
		// This will force a login prompt.
		$role = $user->val('Role');
		return Dataface_PermissionsTool::getRolePermissions($role);
		// Returns all of the permissions for the user's current role.
	}

  public function beforeHandleRequest() {
      Dataface_Application::getInstance()
              ->addHeadContent(
                      sprintf('<link rel="stylesheet" type="text/css" href="%s"/>', htmlspecialchars(DATAFACE_SITE_URL . '/css/style-xf1.css')
                      )
      );
      
      // set default list view sort. In beforeHandleRequest..
      $app = Dataface_Application::getInstance(); 
        $query =& $app->getQuery();
        if ( !$_POST and $query['-table'] == 'about_this_app' and !@$query['-sort'] ){
          $query['-sort'] = 'sortorder desc';
        }

        //default filter:  works In beforeHandleRequest in conf_ApplicationDelegate..
        // if ( !$_POST and $query['-table'] == 'about_this_app' and !isset($query['about_fld'])) {
            // $query['about_fld'] = 'new' ;
        // }        
  }
 
    
    function block__after_left_column() {
        //block__before_fineprint()   block__after_left_column()
        echo "<div id=\"dgleba21\"> <br> </div> ";
        echo "<div id=\"timeoutdg1\">  Timeout: <span id=\"timeoutdg2\"> </span></div> ";
    }
    
    
    // this loads near the bottom of the body...
    function block__javascript_tool_includes() { 
        // https://varvy.com/pagespeed/defer-loading-javascript.html
        //echo '<script src="js/idle_refresh_plainjs.js" type="text/javascript" language="javascript"></script>';
        echo '<script src="js/idle_refresh_jquery.js" type="text/javascript" language="javascript"></script>';
        //echo '<script src="js/handler-save1a.js" type="text/javascript" language="javascript"></script>';
    }
 
}

