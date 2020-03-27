(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,s){e.exports=s.p+"assets/img/testdisk00.235b789b.png"},143:function(e,t,s){e.exports=s.p+"assets/img/testdisk01.32fe2ceb.png"},144:function(e,t,s){e.exports=s.p+"assets/img/testdisk02.93290af7.png"},145:function(e,t,s){e.exports=s.p+"assets/img/testdisk03.fa9bff85.png"},146:function(e,t,s){e.exports=s.p+"assets/img/testdisk04.a6e0ec1c.png"},147:function(e,t,s){e.exports=s.p+"assets/img/testdisk05.c9677934.png"},148:function(e,t,s){e.exports=s.p+"assets/img/testdisk06.7e47707a.png"},149:function(e,t,s){e.exports=s.p+"assets/img/testdisk07.32ed03c8.png"},150:function(e,t,s){e.exports=s.p+"assets/img/testdisk08.bf1cfb51.png"},151:function(e,t,s){e.exports=s.p+"assets/img/testdisk09.12f44c4b.png"},152:function(e,t,s){e.exports=s.p+"assets/img/testdisk10.1b5ebfe4.png"},153:function(e,t,s){e.exports=s.p+"assets/img/testdisk11.f45668d9.png"},154:function(e,t,s){e.exports=s.p+"assets/img/testdisk12.6f923c0e.png"},167:function(e,t,s){"use strict";s.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"linux-recovery-file-from-android-device-or-sd-card"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-recovery-file-from-android-device-or-sd-card","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux recovery file from android device or sd card 💻 📱")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("last one is useful for "),t("strong",[this._v("android internal memory")]),this._v(" here i'll highlight also for "),t("strong",[this._v("sd card memory")]),this._v(" recovery 🤘")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"prerequirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequirement","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequirement")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("The phone needs to be rooted. That sucks (yes, I prefer to keep my things stock if possible!), but if the files are important enough the hassle is worth it. If your phone was already rooted, you are good to go.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("https://kingroot.net/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" testdisk "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("pv")]),this._v(" extundelete\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" Instructions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Attach your device to the computer via the USB cable")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Open a terminal on your computer, go to the Android SDK directory's subdirectory sdk/platform-tools (where adb is located)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Log in to your phone with adb shell:")]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("./adb shell\n")])])]),t("p",[this._v("(NB: You might have to implicitly call adb start-server as root first if the command above fails.)")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[s("p",[e._v("Now we can either use the mount command to find out what partition holds the SD Card data and dump that one, or we just dump out the entire memory content and skip the thinking part. I find the latter preferable, since the thinking part involved in the first approach is always prone to fail. So then you want to search for a block device called something like")]),s("p",[s("strong",[e._v("VERY IMPORTANT")]),e._v(" Unlike roubert recovery method which is useful for internal memory, here i also identify it for sd card.")]),s("p",[e._v("by convetion "),s("strong",[e._v("internal memory")]),e._v(" is")]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("/dev/block/mmcblk0\n")])])]),s("p",[s("strong",[e._v("sd card")]),e._v(" is")]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("/dev/block/mmcblk1\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("shell@android:/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ls /dev/block")]),e._v("\ndm-0\ndm-1\ndm-2\nloop0\nloop1\nloop2\nloop3\nloop4\nloop5\nloop6\nloop7\nmmcblk0\nmmcblk0boot0\nmmcblk0boot1\nmmcblk0p1\nmmcblk0p10\nmmcblk0p11\nmmcblk0p12\nmmcblk0p13\nmmcblk0p14\nmmcblk0p2\nmmcblk0p3\nmmcblk0p4\nmmcblk0p5\nmmcblk0p6\nmmcblk0p7\nmmcblk0p8\nmmcblk0p9\nram0\nram1\nram10\nram11\nram12\nram13\nram14\nram15\nram2\nram3\nram4\nram5\nram6\nram7\nram8\nram9\nvold\nzram0\nshell@android:/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"6"}},[t("li",[t("p",[this._v("Exit the shell to go back to the Android SDK directory's subdirectory sdk/platform-tools on your computer.")])]),t("li",[t("p",[this._v("Now let us dump the content of that /dev/block/mmcblk0 that we found to the computer. With adb shell we can become superuser and execute cat to dump the content like this:")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v(" $ ./adb shell "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cat /dev/block/mmcblk0"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("pv")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" mmcblk0.raw\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./adb shell "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"cat /dev/block/mmcblk0"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("pv")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/^M$//'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" mmcblk0.raw\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./adb shell "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("\"su -c 'stty raw; cat /dev/block/mmcblk0'\"")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("pv")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" mmcblk0.raw\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("dd")]),e._v(" if"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/dev/block/mmcblk0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("gzip")]),e._v(" -9 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" nc -l 5555\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("nc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("AndroidIP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" 5555 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("pv")]),e._v(" -b "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" mmcblk0.img.gz\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"8"}},[t("li",[t("p",[this._v("Now wait until the transfer is done. For a 8 GB device it does not take too long, but still there is time to check some e-mails and browse the web while it finishes.")])]),t("li",[t("p",[this._v("With the dump on the Linux machine's file system, now we can let TestDisk take it from there:")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ testdisk mmcblk0.raw\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"10"}},[t("li",[this._v("First restore the GPT partition table. Select mmcblk0.raw in the TestDisk interface and choose Proceed:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(142),alt:"image 1"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(143),alt:"image 2"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(144),alt:"image 3"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(145),alt:"image 4"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(146),alt:"image 5"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(147),alt:"image 6"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(148),alt:"image 7"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(149),alt:"image 8"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(150),alt:"image 9"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(151),alt:"image 10"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(152),alt:"image 11"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(153),alt:"image 12"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(154),alt:"image 13"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("extundelete --restore-all image.dd\n")])])])}],a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),s("p",[e._v("This is a quick overview from")]),s("blockquote",[s("p",[s("a",{attrs:{href:"https://roubert.name/joakim/androidfilerecovery/",target:"_blank",rel:"noopener noreferrer"}},[e._v("roubert android file recovery main source"),s("OutboundLink")],1)])]),e._m(1),e._m(2),s("ul",[e._m(3),e._m(4),s("li",[s("p",[s("a",{attrs:{href:"https://play.google.com/store/apps/details?id=stericson.busybox",target:"_blank",rel:"noopener noreferrer"}},[e._v("BusyBox"),s("OutboundLink")],1),e._v(" installed on your Android device\nThe "),s("a",{attrs:{href:"http://developer.android.com/sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android SDK"),s("OutboundLink")],1),e._v(" to get "),s("a",{attrs:{href:"http://developer.android.com/tools/help/adb.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("adb"),s("OutboundLink")],1),e._v(". Just download the (big) SDK, (unpack it)[http://developer.android.com/sdk/installing/bundle.html] and run adb from within.")])]),s("li",[s("p",[e._v("The programs "),s("a",{attrs:{href:"http://www.cgsecurity.org/wiki/TestDisk",target:"_blank",rel:"noopener noreferrer"}},[e._v("TestDisk"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://code.google.com/p/pipeviewer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pipe Viwer"),s("OutboundLink")],1),e._v(" (pv) and optionally "),s("a",{attrs:{href:"http://extundelete.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("extundelete"),s("OutboundLink")],1),e._v(" (if we are to recover files from ext3/4 filesystems)")])])]),e._m(5),e._m(6),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"http://developer.android.com/tools/device.html#setting-up",target:"_blank",rel:"noopener noreferrer"}},[e._v("Activate USB Debug on your device"),s("OutboundLink")],1),e._v(" (in order to connect with adb)")])]),e._m(7),e._m(8),e._m(9)]),e._m(10),s("p",[e._v("Here we see that there are several partitions within mmcblk0, but we leave it for TestDisk to take care of the partitions later.")]),e._m(11),e._m(12),s("p",[e._v("Pipe Viwer (pv) is optional, but I like to see the transfer progress information it provides.\n(And of course you can change mmcblk0.raw to some other directory/filename if you want to.)")]),s("p",[e._v("Addition: André Paixão wrote to me that he just got an empty file with the command above. He solved it by using "),s("a",{attrs:{href:"http://forum.xda-developers.com/showthread.php?t=1687590",target:"_blank",rel:"noopener noreferrer"}},[e._v("adbd insecure"),s("OutboundLink")],1),e._v(".")]),s("p",[e._v("Addition: Daniel Jeliński wrote to me that he ran into "),s("a",{attrs:{href:"http://stackoverflow.com/questions/13578416/read-binary-stdout-data-from-adb-shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues with LF encoding"),s("OutboundLink")],1),e._v(". The solution that worked for him was:")]),e._m(13),s("p",[e._v("...where ^M is what you get by pressing Ctrl+V followed by Ctrl+M.")]),s("p",[e._v("Addition: Marc also ran into the LF problems, but solved it this way:")]),e._m(14),s("p",[e._v("Addition: Tim de Waal wrote to me that he prefers using netcat/gzip instead:")]),s("p",[e._v("On the Android device (adb shell with su), run:")]),e._m(15),s("p",[e._v("On the computer, run:")]),e._m(16),e._m(17),e._m(18),e._m(19),s("p",[e._v("Choose EFI GPT partition map:")]),e._m(20),s("p",[e._v("Then select Analyse in order for TestDisk to find the partitions:")]),e._m(21),s("p",[e._v("Choose Quick Search:")]),e._m(22),s("p",[e._v("Hopefully the search will return a nice table like this:")]),e._m(23),s("p",[e._v("Then just press enter to continue.")]),e._m(24),s("p",[e._v("Select Write to write this new(ly recovered) partition table. Then confirm with Y:")]),e._m(25),s("p",[e._v("You will then be informed that you need to reboot. But in our case there is no need for that. Just press enter to continue:")]),e._m(26),s("p",[e._v("Now the partition table is restored, and we can go on and try to recover the files.")]),e._m(27),s("p",[e._v("Select Advanced to use TestDisk's Filesystem Utils section:")]),e._m(28),s("p",[e._v("Select the partition where you want to do the recovery. In this example, we want to recover photos from the FAT32 SD Card partition with the Undelete option:")]),e._m(29),s("p",[e._v("Now we can browse the filesystem for files that can be recovered:")]),e._m(30),s("p",[e._v("In the /DCIM/100ANDRO directory, where my Android device stores its camera images, we find a lot of files that can be recovered. Select all or some of them, and use either C or c to recover them to one of the Linux computer's file systems (e.g. your home directory):")]),e._m(31),s("p",[e._v("Done!")]),s("p",[e._v("Optional: To recover files from an ext3/ext4 partition, TestDisk has an option Image Creation that will write an image called image.dd of that partition to a file on the Linux computer's file system:")]),e._m(32),s("p",[e._v("Then you can use extundelete in your terminal window to recover files from the image:")]),e._m(33),s("p",[e._v("Thank you very much Mathias Brodala, Piotr Biesiada, André Paixão, Marc, Daniel Jeliński and Tim de Waal for sharing your valuable update suggestions and corrections.")])])},r,!1,null,null,null);t.default=n.exports}}]);