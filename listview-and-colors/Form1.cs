using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace listview_and_colors
{
    public partial class Form1 : Form
    {


        public Form1()
        {
            InitializeComponent();
            radioButton1.Tag = panel1;
            radioButton2.Tag = panel2;
            radioButton3.Tag = panel3;
            radioButton4.Tag = panel4;
            radioButton5.Tag = panel5;
            radioButton6.Tag = panel6;
            radioButton7.Tag = panel7;
            radioButton8.Tag = panel8;
            radioButton9.Tag = panel9;
            radioButton10.Tag = panel10;
        }

        private void listView1_Click(object sender, EventArgs e)
        {
            
        }

        private ListViewItem.ListViewSubItem GetSubitemAt(int x, int y)
        {
            ListViewItem itm = listView1.GetItemAt(x, y);
            if (itm != null)
            {
                //x -= itm.Position.X;
                //y -= itm.Position.Y;
                foreach (ListViewItem.ListViewSubItem sub in itm.SubItems.Cast<ListViewItem.ListViewSubItem>().Reverse() )
                    if (sub.Bounds.Contains(x, y))
                        return sub;
            }

            return null;
        }

        private void listView1_MouseUp(object sender, MouseEventArgs e)
        {
            var checkedButton = grpColors.Controls.OfType<RadioButton>().FirstOrDefault(r => r.Checked);
            if (checkedButton == null)
                return;
            Color c = ((Panel)checkedButton.Tag).BackColor;

            // var set_color_on = listView1.GetItemAt(e.X, e.Y);

            ListViewItem itm = null;
            for ( int i=listView1.Items.Count-1; i >= 0; --i )
                if ( listView1.Items[i].GetBounds(ItemBoundsPortion.Entire).Contains(e.X, e.Y))
                { 
                    itm = listView1.Items[i];
                    break;
                }
            if (itm == null)
                return;

            ListViewItem.ListViewSubItem sub = itm.GetSubItemAt(e.X, e.Y);
            if (sub == null)
                return;
            var set_color_on = sub;


            if (set_color_on == null)
                return;

            if (e.Button == MouseButtons.Left)
                set_color_on.ForeColor = c;
            else if (e.Button == MouseButtons.Right)
                set_color_on.BackColor = c;
            
            
            //listView1.Refresh();
        }
    }
}
