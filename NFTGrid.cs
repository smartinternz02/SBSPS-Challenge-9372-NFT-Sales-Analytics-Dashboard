using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace Crypto
{
    public class NFTGrid
    {
        public static DataSet LoadGrid()
        {
            DataSet ds = new DataSet();
            try
            {
                string _connection = ConfigurationManager.ConnectionStrings["dbConnection"].ConnectionString.ToString().Trim();
                SqlConnection con = new SqlConnection(_connection);
                SqlCommand cmd = new SqlCommand("sp_get_grid_data", con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(ds);
            }
            catch(Exception ex)
            {

            }
            return ds;
        }
    }
}