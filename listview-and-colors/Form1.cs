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
        }

        private void listView1_Click(object sender, EventArgs e)
        {
            
        }

        private ListViewItem.ListViewSubItem GetSubitemAt(int x, int y)
        {
            ListViewItem itm = listView1.GetItemAt(x, x);
            if (itm != null)
                foreach (ListViewItem.ListViewSubItem sub in itm.SubItems)
                    if (sub.Bounds.Contains(x, y))
                        return sub;
            return null;
        }

        private void listView1_MouseUp(object sender, MouseEventArgs e)
        {
            var checkedButton = grpColors.Controls.OfType<RadioButton>().FirstOrDefault(r => r.Checked);
            if (checkedButton == null)
                return;

            ListViewItem.ListViewSubItem sub = GetSubitemAt(e.X, e.Y);
            if (sub == null)
                return;

            Color c = ((Panel)checkedButton.Tag).ForeColor;

            if (e.Button == MouseButtons.Left)
                sub.ForeColor = c;
            else if (e.Button == MouseButtons.Right)
                sub.BackColor = c;
        }
    }
}
