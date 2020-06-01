#Hello! Welcome to Raw Dog!

##LOCAL PROJECT INSTALL:
🤩 MACOS: 
0. get ready!
1.

 
<!-- TODO: WINDOWS 🥺 -->

##GIT FLOW:
We use bitbucket for version control, and we work off of 'new'.
If you are implementing a feature, pull down from 'new' and create a local branch called 'FirstnameLastame-FeatureName' where FeatureName is the name of the feature you are working on. Perform your work (feature build, bugfixes, UI Improvements, etc) on this branch.
Push to this 'feature' branch 'FirstnameLastame-FeatureName' remotely. When ready for a merge, create a pull request to 'new' and tag Jacob! Hotfixes are usually appropriate to be implemented directly onto the 'new' branch with auth from Jacob!
<!-- !!! in general, you never NEVER want to push directly to 'master'. Push to YOUR BRANCH and PR to merge to 'new', then create a PR on 'new' to merge into 'master'! !!! -->

##RECOMMENDED WORKSPACE SETTINGS:
OS: MACOS
IDE: VSCODE
EXTENSIONS: BETTER COMMENTS, BRACKET PAIR COLORIZER 2, LIVE SHARE, BEAUTIFY & phpfmt - PHP FORMATTER

##COMMENTS:
<!-- ! - things that are broken or deprecated or are alerts should be commented with ! -->
<!-- ? - things that raise question should be commented with ? -->
<!-- TODO: - things that need work or tasks to be completed are to be commented with TODO: -->
<!-- * - things that are important or need to stand out are to be commented with * -->

##FORMATTING:
determine formatting

##DOCUMENTATION:
Classes and functions/methods should be documented according to spec. If you are working on a function or class that is not documented, take the time to document it!

# functions and methods are documented like this:
/**
* * This function...
*
* @param  type              $var_name                       the parameters' purpose
* @param  type              $var_name2                      the parameters' purpose
*
* @return type              what the function returns
*
* @throws ExceptionName     what causes this exception
*
* @uses custom_function_from_our_code()
* @uses function_from_third_party_library()

* @uses class CustomClass
*/

# classes are documented like this: 
/**
* * This class...
*
* @param  type        	    $prop_name                      the properties' purpose
*
* @method method_name       what this method does
*
*/

Built with love in 2020 by Louie Williford