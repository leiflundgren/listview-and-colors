# listview-and-colors
Testbed of having colors on listviewitems
Simple program that colors `ListViewSubItem`s, left-click to color foreground, right-click for background.

![screenshot of tool](screenshot.png?raw=true)

# Key learning
By default `ListViewItem`s are colored by setting `ForeColor`/`BackColor` on the `ListViewItem` itself. If you want to color the sub-items individually, you need to set `ListViewItem.UseItemStyleForSubItems = false`, otherwise setting the color is just silently ignored.

