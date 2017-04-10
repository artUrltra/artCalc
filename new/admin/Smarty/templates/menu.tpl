<!-- Static navbar -->
<nav class="navbar navbar-inverse navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="current"><a href="../admin/index.php?page=stol">Профиль</a></li>
                <li class="current"><a href="../admin/index.php?page=Peremochki">Перемычки</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Дополнения: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        {foreach $supplements as $item name=supplements}
                            <li><a href="../admin/index.php?page=Supplements&id={$item['id']}">{$item['name']}:{$item['type']}</a></li>
                        {/foreach}
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Наполнение: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        {foreach $categoryMaterials as $item name=detors}
                            <li><a href="../admin/index.php?page=materials&type={$item['id']}">{$item['name']}</a></li>
                        {/foreach}
                        <li class="dropdown-header">Расширения</li>
                        <li><a href="../admin/index.php?page=ExpMatireals&type=1">Пескоструйные рисунки</a></li>
                        <li><a href="../admin/index.php?page=ExpMatireals&type=2">Фотопечать</a></li>
                        <li><a href="../admin/index.php?page=ExpMatireals&type=3">Жалюзи</a></li>
                        <li><a href="../admin/index.php?page=ExpMatireals&type=4">Отделка</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Декор: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        {foreach $dekors as $item name=detors}
                            <li><a href="../admin/index.php?page=decor&id={$item['id']}">{$item['name']}</a></li>
                        {/foreach}
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Фурнитура: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="../admin/index.php?page=furnitura0">TMP :: DB</a></li>
                        <li><a href="../admin/index.php?page=furnitura1">Механизмы</a></li>
                        <li><a href="../admin/index.php?page=furnitura2">Элементы</a></li>
                        <li><a href="../admin/index.php?page=furnitura3">Аксессуары</a></li>
                        {foreach $furnituta as $i}
                            <li><a href="../admin/index.php?page=furn&id={$i['id']}">{$i['name']}</a></li>
                        {/foreach}
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Каталоги: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="../admin/index.php?page=Catalogs&id=0">Настройка отображения каталога</a></li>
                        {foreach $catalog as $i}
                            <li><a href="../admin/index.php?page=Catalogs&id={$i['id']}">{$i['title']}</a></li>
                        {/foreach}
                        {foreach $catalog1 as $i}
                            <li><a href="../admin/index.php?page=Catalogs&id={$i['id']}">{$i['title']}</a></li>
                        {/foreach}
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Управления: <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li class="current"><a href="../admin/index.php?page=manager">Управления пользователями</a></li>
                        <li class="current"><a href="../admin/index.php?page=manegerdekor">Управления декором</a></li>
                        <li class="current"><a href="../admin/index.php?page=managermaterials">Управления материалами</a></li>
                        <li class="current"><a href="../admin/index.php?page=managersupplements">Управления дополнения</a></li>
                        <li class="current"><a href="../admin/index.php?page=castomfurnitura">Управления фурнитурой</a></li>
                        <li class="current"><a href="../admin/index.php?page=viewprofil">Вид профиля</a></li>
                        <li class="current"><a href="../admin/index.php?page=manegerstart">Стартовый профиль/материал</a></li>
                        <li class="current"><a href="../admin/index.php?page=EquationEditor">Редактор формул</a></li>
                        <li class="current"><a href="../admin/index.php?page=archive">Архивы</a></li>
                        <li class="current"><a href="../admin/index.php?page=calcmanagers">Менеджеры калькулятора</a></li>
                        <li class="current"><a href="../admin/index.php?page=gallery">Галерея</a></li>
                        <li class="current"><a href="../admin/index.php?page=gallery3d">Галерея 3d</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <a class="navbar-brand" href="#">Авторизирован :{$user}</a>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>
