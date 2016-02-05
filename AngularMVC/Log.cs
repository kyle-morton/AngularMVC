using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularMVC
{
    public static class Log
    {
        readonly static log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
    
        public static void debug (string debugStr){
            log.Debug(debugStr);
        }

        public static void error(string errorStr){
            log.Error(errorStr);
        }
    
    }
}